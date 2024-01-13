async function getData(url) {
  const response = await fetch(url);
  const data = await response.json();
  setPiechart(data);
  console.log(data);
}

getData(
  "http://localhost/school/jaar1/periode2/Week3/Infographic/api/agents.php"
);

function setPiechart(data) {
  const canvaspie = document.getElementById("piechart");
  const labels = data.map((object) => object.agent);
  const colors = data.map((object) => object.color);
  const matches = data.map((object) => object.matches);

  console.log(colors);

  new Chart(canvaspie, {
    type: "pie",
    data: {
      labels: labels,
      datasets: [
        {
          label: "# of votes",
          data: matches,
          backgroundcolor: colors,
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });
}
