export function renderBarChart() {
  const ctx = document.getElementById("barChart").getContext("2d");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Red", "Blue", "Yellow"],
      datasets: [
        {
          label: "Bar Chart",
          data: [12, 19, 3],
          backgroundColor: ["#f87171", "#60a5fa", "#fbbf24"],
        },
      ],
    },
  });
}
