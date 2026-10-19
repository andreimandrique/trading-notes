import { RSI } from "trading-signals";
import candles from '../example/bitcoin-example.json' with { type: 'json' };

async function rsiExample() {

  const closes = candles.map((c) => Number(c.close));
  const rsi = new RSI(14);
  const rsiValues = rsi.updates(closes);
  
  const candlesWithRsi = candles.map((candle, index) => {
    if(index < 14){
      return {...candle, rsi: null};
    }
    return {...candle, rsi: rsiValues[index]};
  });


  console.log(JSON.stringify(candlesWithRsi, null, 2));
}

rsiExample();
