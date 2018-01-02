"use strict";

const knapsack01 = (items,v,w,W) => {
    let t = [[]],
        packed = [],
        total_weight

    const n = items.length;

    for (let j=0;j<=W;j++) {
        t[0][j] = 0
    }

    for (let i=1;i<=n;i++) {
        let value = v[i-1],
            weight = w[i-1]
        for (let j=0;j<=W;j++) {
            t[i] = t[i] || []
            if (weight > j) {
                t[i][j] = t[i-1][j]
            } else { 
                t[i][j] = Math.max(t[i-1][j], t[i-1][j-weight]+value)
            }
        }
    }

    {   
        let j=W;

        for (let i=n;i>0;i--) {
            if (t[i][j] != t[i-1][j]) {
                packed.push(items[i-1])
                j -= w[i-1]
            }
        }
        total_weight = W-j
    }

    return [packed,t[n][W],total_weight]
}

exports.knapsack01 = knapsack01