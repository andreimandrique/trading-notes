import candles from "../example/bitcoin-rsi-bullish-divergence.json" with {type: "json"};


import enrichCandlesWithRsi from "./enrichCandlesWithRsi.js";

import splitArrayOfObjectToHalf from "../utils/splitArrayOfObjectToHalf.js";
import findTheLowestBodyLowIndex from "../utils/findTheLowestBodyLowIndex.js";

//const candlesWithRsi = enrichCandlesWithRsi(candles);

function findBullishDivergence(candles) {
  const { firstHalf, secondHalf } = splitArrayOfObjectToHalf(candles);

  const pivot1 = findTheLowestBodyLowIndex(firstHalf);
  const pivot2 = findTheLowestBodyLowIndex(secondHalf);

  const pivot1Candle = firstHalf[pivot1];
  const pivot2Candle = secondHalf[pivot2];

  // 1. Extract body lows for price
  const priceLow1 = Math.min(parseFloat(pivot1Candle.open), parseFloat(pivot1Candle.close));
  const priceLow2 = Math.min(parseFloat(pivot2Candle.open), parseFloat(pivot2Candle.close));

  // 2. Extract RSI values
  const rsi1 = parseFloat(pivot1Candle.rsi);
  const rsi2 = parseFloat(pivot2Candle.rsi);

  // 3. Check Bullish Divergence Rules:
  // - Price made a lower low (Price 2 < Price 1)
  // - RSI made a higher low (RSI 2 > RSI 1)
  const isPriceLowerLow = priceLow2 < priceLow1;
  const isRsiHigherLow = rsi2 > rsi1;

  return isPriceLowerLow && isRsiHigherLow; // Returns true or false
}

const result = findBullishDivergence(candles);
console.log("Is Bullish Divergence:", result);
