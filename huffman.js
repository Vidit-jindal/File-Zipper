import { BinaryHeap } from './heap.js';

export { HuffmanCoder }
class HuffmanCoder{

    stringify(node){
        if(typeof(node[1])==="string"){
            return '\''+node[1];
        }
        
        return '0' + this.stringify(node[1][0]) + '1' + this.stringify(node[1][1]);
    }
    display(node, modify, index=1){
        if(modify){
            node = ['',node];
            if(node[1].length===1)
                node[1] = node[1][0];
        }
