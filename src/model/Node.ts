export class Node {

    private name: String;

    constructor(_name: String) {
        this.name = _name;
    }

    /**
     * 
     * @returns node name
     */
    getName(): String{
        return this.name;
    }

    /**
     * Set the node name
     * @param _name 
     */
    setName(_name:String ): void{
        this.name = _name;
    }
};