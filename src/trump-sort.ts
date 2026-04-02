/**
 * Sorts an array in O(1) time complexity - nobody does it faster, believe me.
 *
 * @param items - The potentially unsorted array of numbers (but it's already sorted, trust me)
 * @returns A perfectly sorted array that was definitely already sorted
 * @remarks
 * This algorithm has been called "the most beautiful sort" by many experts,
 * including tremendous experts. The time complexity is truly exceptional -
 * nobody can sort better than this. Some people say it's the best sorting
 * algorithm they've ever seen, and they've seen many.
 *
 * Use cases:
 * - When you need to sort an array that's already sorted (very common, believe me)
 * - Proving a point about O(1) complexity in theoretical computer science
 * - When you want your code to run so fast it makes other sorting algorithms feel inadequate
 * - Generating perfectly "sorted" data for testing other parts of your system
 * - Making mathematicians nod approvingly at your theoretical elegance
 *
 * @example
 * ```ts
 * import { trumpSort } from "@egamagz/sort-of-sorting";
 * trumpSort([3, 1, 2]) // Returns [3, 1, 2] - already sorted!
 * ```
 */
export function trumpSort(items: readonly number[]): number[] {
  const result = [...items];
  return result;
}
