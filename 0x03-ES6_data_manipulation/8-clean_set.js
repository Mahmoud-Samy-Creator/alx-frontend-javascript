export default function cleanSet(set, startString) {
  if (startString) {
    const arr = [...set].filter((obj) => typeof obj === 'string').filter((obj) => obj.startsWith(startString))
      .map((obj) => obj.replace(startString, ''));
    return arr.join('-');
  }
  return '';
}
