import LinkedList from './LinkedList';
import LinkedListNode from './LinkedListNode';

const list = new LinkedList();

describe('LinkedList', () => {
    it('append 1', () => {
        const newNode = new LinkedListNode(1);
        expect(list.append(newNode).toArray()).toEqual([1]);
    })
    it('append 3', () => {
        const newNode = new LinkedListNode(3);
        expect(list.append(newNode).toArray()).toEqual([1, 3]);
    })
    it('append 5', () => {
        const newNode = new LinkedListNode(5);
        expect(list.append(newNode).toArray()).toEqual([1, 3, 5]);
    })
    it('append 7', () => {
        const newNode = new LinkedListNode(7);
        expect(list.append(newNode).toArray()).toEqual([1, 3, 5, 7]);
    })
    it('prepend 2', () => {
        const newNode = new LinkedListNode(2);
        expect(list.prepend(newNode).toArray()).toEqual([2, 1, 3, 5, 7]);
    })
    it('prepend 4', () => {
        const newNode = new LinkedListNode(4);
        expect(list.prepend(newNode).toArray()).toEqual([4, 2, 1, 3, 5, 7]);
    })
    it('prepend 6', () => {
        const newNode = new LinkedListNode(6);
        expect(list.prepend(newNode).toArray()).toEqual([6, 4, 2, 1, 3, 5, 7]);
    })
    it('insert 9 at index 3', () => {
        const newNode = new LinkedListNode(9);
        expect(list.insert(newNode, 3).toArray()).toEqual([6, 4, 2, 9, 1, 3, 5, 7]);
    })
    it('insert 0 at index -1 (fail case)', () => {
        const newNode = new LinkedListNode(0);
        expect(list.insert(newNode, -1).toArray()).toEqual([6, 4, 2, 9, 1, 3, 5, 7]);
    })
    it('insert 0 at index 8 (fail case)', () => {
        const newNode = new LinkedListNode(0);
        expect(list.insert(newNode, 8).toArray()).toEqual([6, 4, 2, 9, 1, 3, 5, 7]);
    })
    it('delete 9', () => {
        const newNode = new LinkedListNode(9);
        expect(list.delete(newNode).toArray()).toEqual([6, 4, 2, 1, 3, 5, 7]);
    })
    it('reverse', () => {
        expect(list.reverse().toArray()).toEqual([7, 5, 3, 1, 2, 4, 6]);
    })
    it('length', () => {
        expect(list.length()).toEqual(7);
    })
});