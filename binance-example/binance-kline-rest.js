import { addDays, parseISO } from "date-fns";

const SYMBOL = "BTCUSDT";
const INTERVAL = "1h";
const LIMIT = 30;
const START_DATE = "2026-09-18";

const startDate = parseISO(START_DATE);
const endDate = addDays(startDate, LIMIT - 1);

const startTime = startDate.getTime();
const endTime = endDate.getTime();

const url = `https://api.binance.com/api/v3/klines?symbol=${SYMBOL}&interval=${INTERVAL}&startTime=${startTime}&endTime=${endTime}&limit=${LIMIT}`;

const response = await fetch(url);

if (!response.ok) {
  const body = await response.text();
  console.error(`Request failed: ${response.status} ${response.statusText}`);
  console.error(body);
  process.exit(1);
}

const klines = await response.json();

const candles = klines.map((k) => ({
  symbol: SYMBOL,
  open: k[1],
  high: k[2],
  low: k[3],
  close: k[4],
  volume: k[5],
  openTime: k[0],
  closeTime: k[6],
  isFinal: k[6] < Date.now(),
}));

console.log(`Fetched ${candles.length} candles for ${SYMBOL}@${INTERVAL}`);
console.log(JSON.stringify(candles, null, 2));
