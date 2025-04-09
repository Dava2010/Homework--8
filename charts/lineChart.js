export function renderLineChart() {
  const ctx = document.getElementById("lineChart").getContext("2d");
  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr"],
      datasets: [
        {
          label: "Line Chart",
          data: [10, 20, 15, 30],
          borderColor: "blue",
          backgroundColor: "lightblue",
          tension: 0.4,
        },
      ],
    },
  });
}
