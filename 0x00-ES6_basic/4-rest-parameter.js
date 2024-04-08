export default function returnHowManyArguments(...args) {
  let total = 0;
  /* eslint-disable no-unused-vars */
  for (const arg of args) {
    total += 1;
  }
  /* eslint-enable no-unused-vars */
  return total;
}
