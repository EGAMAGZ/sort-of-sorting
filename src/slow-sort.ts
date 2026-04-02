/**
 * Slow Sort algorithm.
 * A gloriously inefficient, multiply-recursive sorting algorithm.
 * WARNING: With O(n^(log n/2)) time complexity, this makes your computer question its life choices.
 *
 * @param items - The array to sort
 * @returns A new sorted array (because we're polite like that)
 * @remarks
 * Slow Sort is the algorithm equivalent of a philosopher — it takes its time
 * to contemplate each element's place in the universe before gently nudging
 * it closer to its sorted destination. While quicksort is out there being
 * efficient and impressive, Slow Sort strolls through your data with the
 * calm of a Tuesday afternoon. It's not slow because it's poorly written —
 * it's slow because that's the POINT.
 *
 * Use cases:
 * - Teaching recursion (because why not make it confusing?)
 * - Benchmarking other algorithms ("look how fast THIS is!")
 * - Running on quantum computers (still slow)
 * - Making your colleagues question your career choices
 *
 * @see https://en.wikipedia.org/wiki/Slowsort
 *
 * @example
 * ```ts
 * import { slowSort } from "@egamagz/sort-of-sorting"
 * slowSort([3, 1, 2]) // Returns [1, 2, 3]... eventually
 * ```
 */
export function slowSort(items: readonly number[]): number[] {
  const sorted = [...items];

  function sort(left: number, right: number): void {
    if (left >= right) return;

    const middle = (left + right) >> 1;

    sort(left, middle);
    sort(middle + 1, right);

    if (sorted[middle] > sorted[right]) {
      [sorted[middle], sorted[right]] = [sorted[right], sorted[middle]];
    }

    sort(left, right - 1);
  }

  sort(0, sorted.length - 1);
  return sorted;
}
