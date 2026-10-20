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

new Chart(myChart, {
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
        type: "time",
        time: { unit: "hour" },
      },
    },
  },
});

const myChartRsi = document.getElementById("myChartRsi");

new Chart(myChartRsi, {
  type: "line",
  data: {
    datasets: [
      {
        label: "RSI",
        data: rsiData,
        borderColor: "rgb(75, 192, 192)",
        borderWidth: 1.5,
        pointRadius: 1,
        hoverPointRadius: 5,
      },
    ],
  },
  options: {
    scales: {
      x: {
        type: "time",
        time: { unit: "hour" },
      },
      y: {
        min: 0,
        max: 100,
      },
    },
  },
});
