# Divergence Candle Requirements

These are the candle requirements for the divergence feature.

- A 1-hour divergence requires **24 candles**.
- A 1-day divergence requires **30 candles**.

## Bullish Divergence Rules

To form a bullish divergence:

- RSI must go low, then form a **higher low**.
- Price must be high, then form a **lower high**.
- Concretely (see `features/bullish-divergence.js`): price makes a lower low or equal (`priceLow2 <= priceLow1`) while RSI makes a higher low (`rsi2 > rsi1`).