export function renderPieChart() {
  const ctx = document.getElementById("pieChart").getContext("2d");
  new Chart(ctx, {
    type: "pie",
    data: {
      labels: ["A", "B", "C"],
      datasets: [
        {
          label: "Pie Chart",
          data: [30, 40, 30],
          backgroundColor: ["#fb7185", "#a78bfa", "#34d399"],
        },
      ],
    },
  });
}
