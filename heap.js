
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

            if (parent[0] >= element[0]) break;
            this.heap[index] = parent;
            this.heap[parentIndex] = element;
            index = parentIndex
        }
    }
    
    extractMax() {
        const max = this.heap[0];
        const tmp = this.heap.pop();
        if(!this.empty()) {
            this.heap[0] = tmp;
            this.sinkDown(0);
        }
        return max;
    }
