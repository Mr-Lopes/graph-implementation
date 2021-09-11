import { Node } from "./Node";

export class Edge {

    private node: Node;
    private distance: number = 0;;

    constructor(_node: Node, _distance: number = 0) {
        this.node = _node;
        this.distance = _distance;
    }

    getNode(): Node {
        return this.node;
    }

    getDistance(): number {
        return this.distance;
    }

    setDistance(_distance: number) {
        this.distance = _distance;
    }
}