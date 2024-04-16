export default function createInt8TypedArray(length, position, value) {
  /* Creating new ArrayBuffer */
  const buffer = new ArrayBuffer(length);
  /* Creating new Int8Array -> passing the buffer in it */
  const newTypedArray = new Int8Array(buffer);
  /* Ensuring condition */
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }
  /* Making the value at the required position */
  newTypedArray[position] = value;
  /* Returning the buffer */
  return new DataView(buffer);
}
