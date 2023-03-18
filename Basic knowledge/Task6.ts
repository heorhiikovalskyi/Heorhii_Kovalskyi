const permutations: number[] = [];

function Permute(digitsArray: string[], currentPermutation: string = "") {
  if (digitsArray.length === 0) {
    permutations.push(parseInt(currentPermutation));
  } else {
    for (let i = 0; i < digitsArray.length; i++) {
      const currentArray = digitsArray.slice();
      const nextPermutationDigit = currentArray.splice(i, 1)[0];
      Permute(currentArray, currentPermutation + nextPermutationDigit);
    }
  }
}

function NextBigger(number: number) {
  let nextBigger = Infinity;
  Permute(number.toString().split(""));
  permutations.forEach((permutation) => {
    if (permutation > number && permutation < nextBigger)
      nextBigger = permutation;
  });
  return nextBigger === Infinity ? -1 : nextBigger;
}

console.log(NextBigger(2017));
