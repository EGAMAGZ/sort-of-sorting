import { isSorted } from './utils.ts';

/**
 * Bozo Sort algorithm.
 * A probabilistically improbable sorting algorithm that randomly swaps elements until by some miracle the array becomes sorted.
 * WARNING: With O(n! * n) time complexity, this makes your computer question its existence.
 *
 * @param items - The array to sort
 * @returns A new sorted array (hopefully, statistically improbable, but possible)
 * @remarks
 * Bozo Sort is what happens when you close your eyes, throw darts at a wall of
 * numbers, and hope for the best. It randomly swaps two elements, checks if
 * the array is sorted, and if not, tries again. The universe has been running
 * Bozo Sort since the dawn of chaos and we're still not sure if it's sorted yet.
 *
 * Use cases:
 * - When you're feeling lucky (spoiler: you're not)
 * - Proving that randomness is not a substitute for competence
 * - Generating entropy for cryptographic purposes (terrible idea)
 * - When you want to watch your CPU play Russian roulette with your data
 * - Teaching probability theory through suffering
 *
 * @example
 * ```ts
 * import { bozoSort } from "@egamagz/sort-of-sorting"
 * bozoSort([3, 1, 2]) // Returns [1, 2, 3]... probably
 * ```
 */
export function bozoSort(items: readonly number[]): number[] {
  const result = [...items];

  while (!isSorted(result)) {
    const firstIndex = Math.floor(Math.random() * result.length);
    const secondIndex = Math.floor(Math.random() * result.length);
    [result[firstIndex], result[secondIndex]] = [
      result[secondIndex],
      result[firstIndex],
    ];
  }

  return result;
}
