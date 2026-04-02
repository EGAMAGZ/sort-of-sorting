/**
 * Checks if an array is sorted in ascending order.
 * @param items - The array to check (hopefully it's sorted by now)
 * @returns `true` if the array is sorted, `false` otherwise
 */
export function isSorted(items: readonly number[]): boolean {
  for (let i = 1; i < items.length; i++) {
    if (items[i - 1] > items[i]) {
      return false;
    }
  }
  return true;
}
