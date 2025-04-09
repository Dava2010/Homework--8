export function renderPolarChart() {
  const ctx = document.getElementById("polarChart").getContext("2d");
  new Chart(ctx, {
    type: "polarArea",
    data: {
      labels: ["A", "B", "C", "D"],
      datasets: [
        {
          label: "Polar Area Chart",
          data: [11, 16, 7, 12],
          backgroundColor: ["#38bdf8", "#facc15", "#fb7185", "#34d399"],
        },
      ],
    },
  });
}
