
export { BinaryHeap }

class BinaryHeap {

    constructor() {
        this.heap = [];
    }
    
    insert(value) {
        this.heap.push(value);
        this.bubbleUp();
    }
    
    size() {
        return this.heap.length;
    }

