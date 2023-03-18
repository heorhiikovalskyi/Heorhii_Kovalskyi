function GetIPv4(number: number): string {
  const octets: number[] = [];
  for (let i = 3; i >= 0; i--) {
    octets[i] = (number >> (8 * (3 - i))) & 0xff;
  }
  return octets.join(".");
}

console.log(GetIPv4(2149583361));
