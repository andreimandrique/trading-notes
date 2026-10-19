//for bearish divergence

function findLowestBodyLow(candles) {
  // For each candle, find the lower value between open and close (the bottom of the body)
  const bodyLows = candles.map(candle => {
    const open = parseFloat(candle.open);
    const close = parseFloat(candle.close);
    return Math.min(open, close);
  });

  // Find the minimum among those body lows
  return Math.min(...bodyLows);
}

export default findLowestBodyLow;