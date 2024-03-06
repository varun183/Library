export function findMaxVote(array) {
  let indexOfMaxVote = 0;
  for (let i = 1; i < array.length; i++) {
    if (array[i] > array[indexOfMaxVote]) {
      indexOfMaxVote = i;
    }
  }
  return indexOfMaxVote;
}
