const xValues = ["Blue Whale", "T-Rex", "Elephant", "Giraffe", "Tiger"];
const yValues = [30, 12, 9, 6, 3];
const barColors = ["blue", "grey","red","orange","brown"];
Chart.defaults.global.defaultFontColor = "aliceblue";


new Chart("whaleChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues,
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Comparing the length of animals to a blue whale(m)",
      font: {size:26}
    }
  }
});

/* Used the following to help with the javascript for this chart: https://www.w3schools.com/js/tryit.asp?filename=tryai_chartjs_bars_colors_more
https://www.w3schools.com/ai/ai_chartjs.asp */
