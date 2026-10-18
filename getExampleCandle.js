import { addDays, parseISO } from "date-fns";

const DEFAULTS = {
  symbol: "BTCUSDT",
  interval: "1h",
  limit: 29,
  startDate: "2026-09-18",
};

async function getExampleCandle({
  symbol = DEFAULTS.symbol,
  interval = DEFAULTS.interval,
  limit = DEFAULTS.limit,
  startDate = DEFAULTS.startDate,
} = {}) {
  const start = parseISO(startDate);
  const end = addDays(start, limit - 1);

  const params = new URLSearchParams({
    symbol,
    interval,
    startTime: String(start.getTime()),
    endTime: String(end.getTime()),
    limit: String(limit),
  });

  const url = `https://api.binance.com/api/v3/klines?${params.toString()}`;

  const response = await fetch(url);

  if (!response.ok) {
    const body = await response.text();
    throw new Error(
      `Binance klines request failed: ${response.status} ${response.statusText} - ${body}`,
    );
  }

  const klines = await response.json();

  return klines.map((k) => ({
    symbol,
    open: k[1],
    high: k[2],
    low: k[3],
    close: k[4],
    volume: k[5],
    openTime: k[0],
    closeTime: k[6],
    isFinal: k[6] < Date.now(),
  }));
}

export default getExampleCandle;
