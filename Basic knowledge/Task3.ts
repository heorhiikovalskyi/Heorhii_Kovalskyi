function DigitalRoot(number: number): number {
  if (number / 10 < 1) return number;
  let sum = 0;
  while (number / 10 >= 1) {
    sum += number % 10;
    number = Math.floor(number / 10);
  }
  sum += number;
  return DigitalRoot(sum);
}
