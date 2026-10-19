//for bullish divergence

function findHighestBodyHigh(candles) {
  // For each candle, find the higher value between open and close (the top of the body)
  const bodyHighs = candles.map(candle => {
    const open = parseFloat(candle.open);
    const close = parseFloat(candle.close);
    return Math.max(open, close);
  });

  // Find the maximum among those body highs
  return Math.max(...bodyHighs);
}

export default findHighestBodyHigh;