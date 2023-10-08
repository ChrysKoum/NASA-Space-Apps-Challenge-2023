$(function () {
  "use strict";

  // chart 1

  var ctx = document.getElementById("chart1").getContext("2d");

  var myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
      datasets: [
        {
          label: "Bx",
          data: [3, 3, 8, 5, 7, 4, 6, 4, 6, 3],
          backgroundColor: "rgba(255, 255, 255, 0.65)",
          borderColor: "transparent",
          pointRadius: "0",
          borderWidth: 3,
        },
        {
          label: "By",
          data: [7, 5, 11, 7, 12, 6, 10, 6, 11, 5],
          backgroundColor: "rgba(255, 255, 255, 0.25)",
          borderColor: "transparent",
          pointRadius: "0",
          borderWidth: 1,
        },
        {
          label: "Bz",
          data: [8, 2, 14, 3, 10, 6, 11, 4, 13, 2],
          backgroundColor: "#fff",
          borderColor: "transparent",
          pointRadius: "0",
          borderWidth: 1,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false,
        labels: {
          fontColor: "#ddd",
          boxWidth: 40,
        },
      },
      tooltips: {
        displayColors: false,
      },
      scales: {
        xAxes: [
          {
            ticks: {
              beginAtZero: true,
              fontColor: "#ddd",
            },
            gridLines: {
              display: true,
              color: "rgba(221, 221, 221, 0.08)",
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              fontColor: "#ddd",
            },
            gridLines: {
              display: true,
              color: "rgba(221, 221, 221, 0.08)",
            },
          },
        ],
      },
    },
  });

  // chart 2

  var ctx = document.getElementById("chart2").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Bz", "Flow_Speed", "Proton_Density", "Temperature"],
      datasets: [
        {
          backgroundColor: [
            "#ffffff",
            "rgba(255, 255, 255, 0.70)",
            "rgba(255, 255, 255, 0.50)",
            "rgba(255, 255, 255, 0.20)",
          ],
          data: [5856, 2602, 1802, 1105],
          borderWidth: [0, 0, 0, 0],
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        position: "bottom",
        display: false,
        labels: {
          fontColor: "#ddd",
          boxWidth: 15,
        },
      },
      tooltips: {
        displayColors: false,
      },
    },
  });
});
