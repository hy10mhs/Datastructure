import LinkedList from '../../LinkedList/ES6/LinkedList';
import LinkedListNode from '../../LinkedList/ES6/LinkedListNode';

const DEFAULT_HASH_TABLE_SIZE = 32;
const PRIME = 31;

export default class HashTable {
  /**
   * @param {number} hashTableSize
   */
  constructor(hashTableSize = DEFAULT_HASH_TABLE_SIZE) {
    this.buckets = Array(hashTableSize).fill(null).map(() => new LinkedList());
    this.keys = {};
  }

  /**
   * Converts key string to hash number.
   *
   * @param {string} key
   * @return {number}
   */
  hash(key) {
    const hashValue = Array.from(key).reduce(
      (hashValue, char, index) => hashValue + (char.charCodeAt(0) * (PRIME**(key.length - index - 1)))      
      , 0);
    
    return hashValue % this.buckets.length;
  }
  
  /**
   * @param {string} key
   * @param {*} value
   */
  set(key, value) {
    const keyHash = this.hash(key);
    this.keys[key] = keyHash;
    const bucketLinkedList = this.buckets[keyHash];
    const node = bucketLinkedList.find((nodeValue, key) => nodeValue.key === key, key);

    if (!node) {
      // Insert new node.
      bucketLinkedList.append(new LinkedListNode({ key, value }));
    } else {
      // Update value of existing node.
      node.value.value = value;
    }
  }

  
  /**
   * @param {string} key
   * @return {*}
   */
  delete(key) {
    const keyHash = this.hash(key);
    delete this.keys[key];
    const bucketLinkedList = this.buckets[keyHash];
    const node = bucketLinkedList.find((nodeValue, key) => nodeValue.key === key, key);

    if (node) {
      return bucketLinkedList.delete(node.value);
    }

    return null;
  }

  /**
   * @param {string} key
   * @return {*}
   */
  get(key) {
    const bucketLinkedList = this.buckets[this.hash(key)];
    const node = bucketLinkedList.find((nodeValue, key) => nodeValue.key === key, key);

    return node ? node.value.value : undefined;
  }

  /**
   * @param {string} key
   * @return {boolean}
   */
  has(key) {
    return Object.hasOwnProperty.call(this.keys, key);
  }

  /**
   * @return {string[]}
   */
  getKeys() {
    return Object.keys(this.keys);
  }
}
