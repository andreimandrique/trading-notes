import WebSocket from "ws";

const SYMBOL = "btcusdt";
const INTERVAL = "1m";

const url = `wss://stream.binance.com:9443/ws/${SYMBOL}@kline_${INTERVAL}`;

const ws = new WebSocket(url);

ws.on("open", () => {
  console.log(`Connected to Binance WS, streaming ${SYMBOL}@kline_${INTERVAL}`);
});

ws.on("message", (response) => {
  const message = JSON.parse(response.toString());
  const kline = message.k;

  if (!kline) return;

  const candle = {
    symbol: message.s,
    open: kline.o,
    high: kline.h,
    low: kline.l,
    close: kline.c,
    volume: kline.v,
    openTime: kline.t,
    closeTime: kline.T,
    isFinal: kline.x,
  };

  console.log(JSON.stringify(candle, null, 2));
});

ws.on("error", (err) => {
  console.error("WS error:", err.message);
});

ws.on("close", (code, reason) => {
  console.log(`Disconnected: ${code} ${reason}`);
  process.exit(1);
});

process.on("SIGINT", () => {
  ws.close();
  process.exit(0);
});
