const ctx = document.getElementById("performanceChart");

new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Conservative Portfolio",
        data: [10000, 10150, 10200, 10350, 10400, 10500],
        borderColor: "#4caf50", // Green
        borderWidth: 2,
        tension: 0.3
      },
      {
        label: "Aggressive Portfolio",
        data: [10000, 9800, 10200, 9700, 10800, 11250],
        borderColor: "#f44336", // Red
        borderWidth: 2,
        tension: 0.3
      },
      // --- NEW STOCKS ADDED BELOW ---
      {
        label: "Apple (AAPL)",
        data: [180, 185, 175, 190, 192, 195], // Example monthly prices
        borderColor: "#000000", // Black
        borderWidth: 2,
        tension: 0.3,
        yAxisID: 'y1', // Uses a separate scale because stock price is much lower than $10k
      },
      {
        label: "Amazon (AMZN)",
        data: [150, 155, 160, 175, 180, 185], // Example monthly prices
        borderColor: "#ff9900", // Amazon Orange
        borderWidth: 2,
        tension: 0.3,
        yAxisID: 'y1', 
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top"
      }
    },
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'left',
        title: { display: true, text: 'Portfolio Value ($)' },
        ticks: {
          callback: function(value) { return "$" + value.toLocaleString(); }
        }
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',
        title: { display: true, text: 'Individual Stock Price ($)' },
        grid: { drawOnChartArea: false }, // keeps the chart clean
      }
    }
  }
});