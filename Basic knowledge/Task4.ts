function CountPairs(arr: number[], target: number) {
  let count = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    const pairElement = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] + pairElement === target) count += 1;
    }
  }
  return count;
}
