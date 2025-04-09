export function renderRadarChart() {
  const ctx = document.getElementById("radarChart").getContext("2d");
  new Chart(ctx, {
    type: "radar",
    data: {
      labels: ["Speed", "Strength", "Agility", "Endurance"],
      datasets: [
        {
          label: "Radar Chart",
          data: [65, 59, 90, 81],
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "#f43f5e",
          pointBackgroundColor: "#f43f5e",
        },
      ],
    },
  });
}
