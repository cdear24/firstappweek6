Chart.defaults.color = 'aliceblue';

const xValues = [1960, 1970, 1980, 1991, 1995, 2005, 2010, 2015, 2021];
const yValues = [100000, 65000, 14785, 3450, 2410, 3726, 4880, 5214, 6195];

const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "rgb(230, 57, 57)",
      borderColor: "aliceblue",
      data: yValues
    }]
  },
  options: {
    plugins: {
      legend: {display:false},
      title: {
        display: true,
        text: "Black Rhino Population Over Time",
        font: {size:26}
      }
    }
  }
});