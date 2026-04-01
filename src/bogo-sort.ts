/**
 * Checks if an array is sorted in ascending order.
 * @param array - The array to check
 * @returns `true` if the array is sorted, `false` otherwise
 */
function isSorted(array: readonly number[],): boolean {
  for (let i = 1; i < array.length; i++) {
    if (array[i - 1] > array[i]) {
      return false
    }
  }
  return true
}

/**
 * Fisher-Yates shuffle algorithm.
 * Randomizes the order of elements in-place.
 * @param array - The array to shuffle
 * @returns A new array with elements in random order
 */
function shuffle(array: readonly number[],): number[] {
  const result = [...array,]
  let count = result.length

  while (count > 0) {
    const randomIndex = Math.floor(Math.random() * count,)
    count--

    const temp = result[count]
    result[count] = result[randomIndex]
    result[randomIndex] = temp
  }

  return result
}

/**
 * Bogo Sort (Stupid Sort) algorithm.
 * Repeatedly shuffles the array until it becomes sorted.
 * WARNING: Extremely inefficient with O(n!) time complexity.
 * @param array - The array to sort
 * @returns A new sorted array
 */
export function bogoSort(array: readonly number[],): number[] {
  let result = [...array,]

  while (!isSorted(result,)) {
    result = shuffle(result,)
  }

  return result
}
