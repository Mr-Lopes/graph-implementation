import { Graph } from "./model/Graph";

let graph = new Graph();

const airports = `PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM`.split(' ');
const routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LAX'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK']
];

airports.forEach(x => graph.addNode(x));
routes.forEach(([nodeA, nodeB]) => {
    
    const A = graph.getNodeByName(nodeA);
    const B = graph.getNodeByName(nodeB);

    // Make the graph undirected
    graph.addEdge(A, B);
    graph.addEdge(B, A);
    
});

graph.bfs(
    graph.getNodeByName('PHX'),
    graph.getNodeByName('BKK'),
);