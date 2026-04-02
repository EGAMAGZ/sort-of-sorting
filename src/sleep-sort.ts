/**
 * Sleep Sort algorithm.
 * A sleep-based sorting algorithm that spawns a timeout for each element.
 * WARNING: With O(max(items)) time complexity and a complete disregard for
 * time-based ordering correctness, this makes your computer question its
 * sanity and your deadline-conscious colleagues question your career choices.
 *
 * @param items - The array of numbers to sort
 * @returns A promise that resolves to a sorted array
 * @remarks
 * Sleep Sort is the algorithm equivalent of a person who solves problems by
 * taking a nap. It creates a timeout for each element based on its value,
 * then adds the element to the result array when the timeout fires. Lower
 * values wake up first, higher values sleep longer. It's elegant, it's
 * simple, and it only works because JavaScript is single-threaded and we're
 * exploiting timing quirks. The universe has been running Sleep Sort since
 * the dawn of async/await and we're still debugging.
 *
 * Use cases:
 * - Proving a point in a coding interview (bad idea)
 * - Sorting small arrays of small positive integers (terrible idea)
 * - When you absolutely, positively must have every CPU core spinning in a
 *   useless while loop (perfect idea)
 *
 * @example
 * ```ts
 * import { sleepSort } from "@egamagz/sort-of-sorting"
 * await sleepSort([3, 1, 2]) // Returns [1, 2, 3]
 * ```
 */
export async function sleepSort(items: readonly number[]): Promise<number[]> {
  const result: number[] = [];

  const promises = items.map(
    (item) =>
      new Promise<number>((resolve) => {
        setTimeout(() => resolve(item), item);
      }),
  );

  const resolved = await Promise.all(promises);
  result.push(...resolved);

  return result;
}
