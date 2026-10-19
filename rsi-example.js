import { RSI } from "trading-signals";
import candles from './bitcoin-example.json' with { type: 'json' };

async function rsiExample() {

  const closes = candles.map((c) => Number(c.close));
  const rsi = new RSI(14);
  const rsiValues = rsi.updates(closes);
  
  const candlesWithRsi = candles.map((candle, i) => ({
    ...candle,
    rsi: rsiValues[i],
  }));

  console.log(JSON.stringify(candlesWithRsi, null, 2));
}

rsiExample();
