function CountLetters(str: string) {
  const map = new Map<string, number>();
  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    map.set(letter, (map.get(letter) || 0) + 1);
  }
  return map;
}
function FirstNonRepeatingLetter(str: string): string {
  const strwithoutUpper = str.toLowerCase();
  const countLetters = CountLetters(strwithoutUpper);
  for (let [letter, count] of countLetters) {
    if (count === 1)
      return str.includes(letter) ? letter : letter.toUpperCase();
  }
  return "";
}
