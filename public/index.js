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
  data: {
    datasets: [
      {
        type: "candlestick",
        label: "Bitcoin Price",
        data: formattedData,
        xAxisID: 'x',
        yAxisID: 'y', // Top panel price axis
      },
      {
        type: "line",
        label: "RSI",
        data: rsiData,
        xAxisID: 'x',
        yAxisID: 'y1', // Bottom panel RSI axis
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1.5,
        pointRadius: 0,
      }
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      x: {
        type: 'time',
        time: { unit: 'day' }
      },
      // Top Panel: Candlestick Price (Higher weight = takes up more height)
      y: {
        type: 'linear',
        position: 'left',
        weight: 3,
      },
      // Bottom Panel: RSI Line (Lower weight = smaller sub-panel at the bottom)
      y1: {
        type: 'linear',
        position: 'left',
        weight: 1,
        min: 0,
        max: 100,
        grid: {
          drawOnChartArea: true,
        },
      },
    },
  },
});