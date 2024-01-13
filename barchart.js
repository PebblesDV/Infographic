async function getData(url) {
  const response = await fetch(url);
  const data = await response.json();
  setBarchart(data);
  console.log(data);
}

getData(
  "http://localhost/school/jaar1/periode2/Week3/Infographic/api/weapons.php"
);

function setBarchart(data) {
  const canvasbar = document.getElementById("barchart");
  const labels = data.map((object) => object.weapon);
  const kills = data.map((object) => object.kills);

  new Chart(canvasbar, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "# of votes",
          data: kills,
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
