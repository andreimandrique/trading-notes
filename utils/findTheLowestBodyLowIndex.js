function findLowestBodyLowIndex(candles) {

  let lowestIndex = -1;
  let lowestValue = Infinity;

  for (let i = 0; i < candles.length; i++) {
    const candle = candles[i];

    // Skip if it's not a final candle
    if (candle.isFinal !== true) continue;

    const bodyLow = Math.min(parseFloat(candle.open), parseFloat(candle.close));

    if (bodyLow < lowestValue) {
      lowestValue = bodyLow;
      lowestIndex = i; // Save the index location
    }
  }

  return lowestIndex; // Returns the index of the lowest body low
}

export default findLowestBodyLowIndex;