export default class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    /*
     *  @param {LinkedListNode}
     *  return {LinkedList}
     */
    append(node) {
        if ( !this.head ) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        
        return this;
    }

    /*
     *  @param {LinkedListNode}
     *  return {LinkedList}
     */
    prepend(node) {
        if ( !this.head ) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        
        return this;
    }

    /*
     *  @param {LinkedListNode}
     *  @param {Number} index
     *  return {LinkedList}
     */
    insert(node, index) {
        let curNode = this.head;

        for ( let i=0; i < index - 1; i++ ) {
            if (curNode.next === this.tail || curNode.next === null) {  
                return this;
            }
            curNode = curNode.next;
        }
        
        if ( index < 0 || this.head === null ) {
        } else if ( index === 0 ) {
            node.next = this.head;
            this.head = node; 
        } else {
            node.next = curNode.next;
            curNode.next = node;
        }

        return this;
    }

    /*
     *  @param {LinkedListNode}
     *  return {LinkedList}
     */
    delete(node) {
        let prevNode = null;
        let curNode = this.head;
        while ( curNode ) {
            if ( curNode.value === node.value ) {
                if ( curNode === this.head ) {
                    this.head = this.head.next;
                    break;
                } else {
                    prevNode.next = curNode.next;
                    break;
                }
            }
            prevNode = curNode;
            curNode = curNode.next;
        }

        return this;
    }

    /*
     * return {LinkedList}
     */
    reverse() {
        let prev = null;
        let mid = null;
        let next = this.head;

        while ( next ) {
            prev = mid;
            mid = next;
            next = next.next;

            mid.next = prev;
        }

        this.tail = this.head;
        this.head = mid;

        return this;
    }

    /*
     * return {Number}
     */
    length() {
        let curNode = this.head;
        let length = 0;
        while ( curNode ) {
            length++;
            curNode = curNode.next;
        }

        return length;
    }

    /*
     * return {Array}
     */
    toArray() {
        let curNode = this.head;
        let values = [];
        while ( curNode ) {
            values.push(curNode.value);
            curNode = curNode.next;
        }
        return values;
    }
}