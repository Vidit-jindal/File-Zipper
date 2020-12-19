import { BinaryHeap } from './heap.js';

export { HuffmanCoder }
class HuffmanCoder{

    stringify(node){
        if(typeof(node[1])==="string"){
            return '\''+node[1];
        }
