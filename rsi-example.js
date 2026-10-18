import { RSI } from "trading-signals";
import getExampleCandle from "./getExampleCandle.js";

const RSI_PERIOD = 14;

async function rsiExample() {
  const candles = await getExampleCandle({
    symbol: "BTCUSDT",
    interval: "1d",
    limit: 29,
    startDate: "2026-09-18",
  });

  const closes = candles.map((c) => Number(c.close));

  const rsi = new RSI(RSI_PERIOD);
  const rsiValues = rsi.updates(closes);

  const candlesWithRsi = candles.map((candle, i) => ({
    ...candle,
    rsi: rsiValues[i],
  }));

  console.log(JSON.stringify(candlesWithRsi, null, 2));
}

rsiExample();
