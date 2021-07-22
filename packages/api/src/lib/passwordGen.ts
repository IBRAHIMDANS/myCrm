export function passwordGenerator(length: number = 8) {
  return new Array(length)
    .fill(length)
    .map(() => String.fromCharCode(Math.random() * 86 + 40))
    .join('');

}
