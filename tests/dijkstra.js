"use strict"

let d = require("../src/dijkstra"),
    graph = [["a", "b", 7],
             ["a", "c", 9],
             ["a", "f", 14],
             ["b", "c", 10],
             ["b", "d", 15],
             ["c", "d", 11],
             ["c", "f", 2],
             ["d", "e", 6],
             ["e", "f", 9]]

let [path,length] = d.dijkstra(graph, "a", "e");
let passed = 0

console.assert(path.join(",")==="a,c,f,e", "Path should be a,c,f,e, getting " + path.join(","))
console.assert(length===20, "Length should be 20, getting " + length)