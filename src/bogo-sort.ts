import { isSorted } from './utils.ts';
/**
 * Fisher-Yates shuffle algorithm.
 * Randomizes the order of elements in-place.
 * Why? Because bogo sort said so.
 * @param array - The array to shuffle
 * @returns A new array with elements in random order
 */
function shuffle(array: readonly number[]): number[] {
  const result = [...array];
  let count = result.length;

  while (count > 0) {
    const randomIndex = Math.floor(Math.random() * count);
    count--;

    const temp = result[count];
    result[count] = result[randomIndex];
    result[randomIndex] = temp;
  }

  return result;
}

/**
 * Bogo Sort (Stupid Sort) algorithm.
 * Repeatedly shuffles the array until it becomes sorted.
 * WARNING: Extremely inefficient with O(n!) time complexity. May cause your computer to question its life choices.
 *
 * @param items - The array to sort
 * @returns A new sorted array (eventually, maybe)
 * @remarks
 * Bogo sort works by generating random arrangements until one happens
 * to be sorted. It's not great. It's not even good. But it exists,
 * and sometimes that's enough. The universe has been running bogo sort
 * on the cosmos for 13.8 billion years and we're still waiting.
 *
 * Use cases:
 * - Proving a point in a coding interview (spoiler: it's a bad point)
 * - Sorting extremely small arrays where nobody will notice the heat death of the universe
 * - When you want to watch your CPU fan spin dramatically
 * - Generating random numbers by pretending they're sorted arrays
 * - Randomly shuffling an array and hoping for the best (which is what you're doing anyway)
 *
 * @example
 * ```ts
 * import { bogoSort } from "@egamagz/sort-of-sorting"
 * bogoSort([3, 1, 2]) // Returns [1, 2, 3]... eventually
 * ```
 */
export function bogoSort(items: readonly number[]): number[] {
  let result = [...items];

  while (!isSorted(result)) {
    result = shuffle(result);
  }

  return result;
}
