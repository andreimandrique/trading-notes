console.log(candles);

const formattedData = candles.map((item) => ({
  x: item.openTime,
  o: parseFloat(item.open),
  h: parseFloat(item.high),
  l: parseFloat(item.low),
  c: parseFloat(item.close),
}));


const rsiData = candles.map((item) => ({
  x: item.openTime,
  y: item.rsi,
}));


const myChart = document.getElementById("myChart");

const priceChart = new Chart(myChart, {
  type: "candlestick",
  data: {
    datasets: [
      {
        label: "Bitcoin Price",
        data: formattedData,
      },
    ],
  },
  options: {
    scales: {
      x: {
        type: 'time',
        time: { unit: 'day' }
      },

    }
  }
});

const myChartRsi = document.getElementById("myChartRsi");

const rsiChart = new Chart(myChartRsi, {
  type: "line",
  data: {
    datasets: [
      {
        label: "RSI",
        data: rsiData,
      },
    ],
  },
  options: {
    scales: {
      x: {
        type: 'time',
        time: { unit: 'day' }
      },
      y: {
        min: 0,
        max: 100,
      },
    },
  },
});


