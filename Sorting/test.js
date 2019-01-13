import bubbleSort from './bubbleSort';
import selectionSort from './selectionSort';
import insertionSort from './insertionSort';
import heapSort from './heapSort';
import mergeSort from './mergeSort';
import quickSort from './quickSort';
import countingSort from './countingSort';
import radixSort from './radixSort';

const testArr = [2,6,5,8,0,1,4,9,3,7];
const radixTestArr = [123,442,542,236,832,11,25,86,2,2456];

describe('Sorting', () => {
  it('bubbleSort', () => {
    expect(bubbleSort(testArr)).toEqual([0,1,2,3,4,5,6,7,8,9]);
  })
  it('selectionSort', () => {
    expect(selectionSort(testArr)).toEqual([0,1,2,3,4,5,6,7,8,9]);
  })
  it('insertionSort', () => {
    expect(insertionSort(testArr)).toEqual([0,1,2,3,4,5,6,7,8,9]);
  })
  it('heapSort', () => {
    expect(heapSort(testArr)).toEqual([0,1,2,3,4,5,6,7,8,9]);
  })
  it('mergeSort', () => {
    expect(mergeSort(testArr)).toEqual([0,1,2,3,4,5,6,7,8,9]);
  })
  it('quickSort', () => {
    expect(quickSort(testArr)).toEqual([0,1,2,3,4,5,6,7,8,9]);
  })
  it('countingSort', () => {
    expect(countingSort(testArr)).toEqual([0,1,2,3,4,5,6,7,8,9]);
  })
  it('radixSort', () => {
    expect(radixSort(testArr)).toEqual([0,1,2,3,4,5,6,7,8,9]);
  })
  it('radixSort bignumber', () => {
    expect(radixSort(radixTestArr)).toEqual([2,11,25,86,123,236,442,542,832,2456]);
  })
});