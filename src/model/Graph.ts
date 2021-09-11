import { Edge } from "./Edge";
import { Node } from "./Node";

export class Graph {

    private nodes = new Set<Node>();
    private edges = new Map<Node,Set<Edge>>();

    /**
     * Creates a new node in the graph
     * @param _name 
     * @returns 
     */
    addNode(_name:String): Node {
        // Creates a new instance of Node
        const newNode = new Node(_name);
        // Adds the nearly created node to the list of nodes
        // of this graph's instance
        this.nodes.add(newNode);
        // Establishes the edges of this node
        this.edges.set(newNode, new Set<Edge>());
        // Returns the intance of the node created
        return newNode;
   }

    /**
     * Creates a direction between two nodes in the graph
     * @param _node 
     * @param _nextNode 
     */
    addEdge(_node: Node, _nextNode: Node, _distance: number = 0): Edge {
        // Lets check if both nodes exist in order to be created a edge 
        if (!this.nodes.has(_node) || !this.nodes.has(_nextNode))
            throw Error(`One of the nodes does not exist`);
        
        const newEdge = new Edge(_nextNode, _distance);
        
        // Retrieves the starting node
        this.edges.get(_node)?.add(newEdge);

        // Returns the nearly created edge
        return newEdge;
          
    }
    
    /**
     * Returns the first node that matches the name
     * or throws an error - node not found
     * @param _name 
     */
    getNodeByName(_name: String): Node {
        for (const _node of this.nodes)
            if (_node.getName() === _name)
                return _node;
    

        // In case the node was not found
        throw Error(`Node not found: ${_name}`);
    }

    /**
     * Invokes the console.log with the currect graph structure
     */
    printNodes(): void {
        // Prints the whole structure   
        for (const [node, edges] of this.edges) 
            console.log(node, edges);
             
    }

    /**
     * Uses Breadth-first search algorithm to find the destination
     * @param start 
     * @param end 
     */
    bfs(start: Node, end:Node): void{
        
        const queue: Node[] = [start];
        const visited = new Set<Node>();

        while (queue.length > 0) {
            // FIFO
            // Process the first item of the queue
            const currentNode = queue.shift();
            
            for (const edge of this.edges.get(currentNode!)!) {
                const next = edge.getNode();

                 // Checks if the destination has arrived
                if (end === next) {
                    console.log(`Found: ${next.getName()}`);
                }

                // Pushes the next node into the queue
                if (!visited.has(next)) {
                    visited.add(next);
                    queue.push(next);
                    console.log(`${next.getName()}`);
                }
            }       
        }
    }

    /**
     * Uses Depth-first search algorithm to find the destination
     * @param start 
     * @param end 
     * @param visited 
     */
    dfs(start: Node, end:Node, visited = new Set<Node>()): void{
               
        for (const edge of this.edges.get(start)!) {
            const next = edge.getNode();

            // Checks if the destination has arrived
            if (end === next) {
                console.log(`Found: ${next.getName()}`);
                return;
            }

            if (!visited.has(next)) {
                visited.add(next);
                console.log(`${next.getName()}`);
                
                // Goes to the next interation
                this.dfs(
                    next,
                    end,
                    visited
                );
            }
        }       
        
    }
};