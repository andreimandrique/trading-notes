console.log(candles);

const formattedData = candles.map(item => ({
  x: item.openTime, // already a millisecond timestamp, accepted by the luxon adapter
  o: parseFloat(item.open),
  h: parseFloat(item.high),
  l: parseFloat(item.low),
  c: parseFloat(item.close)
}));

const data = {
  datasets: [{
    label: 'Bitcoin Price',
    data: formattedData
  }]
};

const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'candlestick',
  data: data,
  options: {
    scales: {
      x: {
        type: 'time',
        time: { unit: 'day' }
      }
    }
  }
});