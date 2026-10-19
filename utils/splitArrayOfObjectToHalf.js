function splitArrayOfObjectToHalf(array) {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array as input');
  }

  // Find the midpoint index
  const midpoint = Math.ceil(array.length / 2);

  // Split into two halves
  const firstHalf = array.slice(0, midpoint);
  const secondHalf = array.slice(midpoint);

  return { firstHalf, secondHalf };
}

export default splitArrayOfObjectToHalf;