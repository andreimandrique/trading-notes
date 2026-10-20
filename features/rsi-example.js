import { RSI } from "trading-signals";
import candles from "../example/bitcoin-example.json" with { type: "json" };

const RSI_PERIOD = 14;

function enrichCandlesWithRsi(rawCandles) {
  const closes = rawCandles.map((c) => Number(c.close));
  const rsiCalculator = new RSI(RSI_PERIOD);
  const rsiValues = rsiCalculator.updates(closes);

  return rawCandles
    .map((candle, index) => ({
      ...candle,
      rsi: rsiValues[index] ?? null,
    }))
    .filter((candle) => candle.rsi !== null);
}

// Execute and log
const candlesWithRsi = enrichCandlesWithRsi(candles);
console.log(JSON.stringify(candlesWithRsi, null, 2));