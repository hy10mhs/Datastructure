import DoublyLinkedList from './DoublyLinkedList';
import DoublyLinkedListNode from './DoublyLinkedListNode';

const list = new DoublyLinkedList();

describe('DoublyLinkedList', () => {
  it('append 1', () => {
    const newNode = new DoublyLinkedListNode(1);
    expect(list.append(newNode).toArray()).toEqual([1]);
  })
  it('append 3', () => {
    const newNode = new DoublyLinkedListNode(3);
    expect(list.append(newNode).toArray()).toEqual([1, 3]);
  })
  it('append 5', () => {
    const newNode = new DoublyLinkedListNode(5);
    expect(list.append(newNode).toArray()).toEqual([1, 3, 5]);
  })
  it('append 7', () => {
    const newNode = new DoublyLinkedListNode(7);
    expect(list.append(newNode).toArray()).toEqual([1, 3, 5, 7]);
  })
  it('prepend 2', () => {
    const newNode = new DoublyLinkedListNode(2);
    expect(list.prepend(newNode).toArray()).toEqual([2, 1, 3, 5, 7]);
  })
  it('prepend 4', () => {
    const newNode = new DoublyLinkedListNode(4);
    expect(list.prepend(newNode).toArray()).toEqual([4, 2, 1, 3, 5, 7]);
  })
  it('prepend 6', () => {
    const newNode = new DoublyLinkedListNode(6);
    expect(list.prepend(newNode).toArray()).toEqual([6, 4, 2, 1, 3, 5, 7]);
  })
  it('delete 3', () => {
    expect(list.delete(3).toArray()).toEqual([6, 4, 2, 1, 5, 7]);
  })
  it('reverse', () => {
    expect(list.reverse().toArray()).toEqual([7, 5, 1, 2, 4, 6]);
  })
  it('length', () => {
    expect(list.length()).toEqual(6);
  })
  it('find 2', () => {
    expect(list.find((nodeValue, value) => nodeValue === value, 2).value).toEqual(2);
  })
  it('deleteHead', () => {
    expect(list.deleteHead().value).toEqual(7);
  })
  it('deleteTail', () => {
    expect(list.deleteTail().value).toEqual(6);
  })
});