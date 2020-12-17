
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
    
    empty(){
        return ( this.size()===0 );
    }

    //using iterative approach
    bubbleUp() {
        let index = this.size() - 1;

        while (index > 0) {
            let element = this.heap[index],
                parentIndex = Math.floor((index - 1) / 2),
                parent = this.heap[parentIndex];
