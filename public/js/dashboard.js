const projectSelect = document.getElementById("project-select");
let res = [];
fetch("/api/users/profile")
  .then((res) => res.json())
  .then((data) => {
    res = data;
    data.projects.map((i) => {
      projectSelect.innerHTML += `<option value="${i.project_name}">${i.project_name}</option>`;
    });
    displayChart(data);
  });

projectSelect.addEventListener("change", (e) => {
  const arr = {};
  const temp = [];
  const foundData = res.projects.find((i) => i.project_name == e.target.value);
  temp.push(foundData);
  arr.projects = temp;
  displayChart(arr);
});

function displayChart(data) {
  console.log(data);
  const igClicks = data.projects.map((i) =>
    i.campaigns.map((item) => item.ig_clicks)
  );
  const fbClicks = data.projects.map((i) =>
    i.campaigns.map((item) => item.fb_clicks)
  );
  const fbRegistered = data.projects.map((i) =>
    i.campaigns.map((item) => item.fb_registered)
  );
  const igRegistered = data.projects.map((i) =>
    i.campaigns.map((item) => item.ig_registered)
  );
  const uniqueVisitors = data.projects.map((i) => {
    const campaigns = i.campaigns;
    return campaigns.reduce((acc, curr) => {
      return acc + curr.unique_visitors;
    }, 0);
  });
  const totalVisitors = data.projects.map((i) => {
    const campaigns = i.campaigns;
    return campaigns.reduce((acc, curr) => {
      return acc + curr.total_visitors;
    }, 0);
  });
  Highcharts.chart("container1", {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie",
    },
    title: {
      text: "Total Visitors to the Landing Page",
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.value}</b>",
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b>: {point.value}",
        },
      },
    },
    series: [
      {
        name: "Visitors",
        colorByPoint: true,
        data: [
          {
            name: "Unique",
            value: uniqueVisitors[0],
            y: (uniqueVisitors[0] / 1500) * 100,
          },
          {
            name: "Total",
            value: totalVisitors[0],
            y: (totalVisitors[0] / 1500) * 100,
          },
        ],
      },
    ],
  });
  Highcharts.chart("container2", {
    chart: {
      type: "column",
    },
    title: {
      text: "Facebook results by month",
    },
    xAxis: {
      categories: ["Jan"],
      //   crosshair: true,
    },
    yAxis: {
      min: 0,
      title: {
        text: "Facebook",
      },
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
      series: {
        label: {
          enabled: false,
        },
      },
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
      series: {
        label: {
          enabled: false,
        },
      },
    },
    series: [
      {
        name: "Ad clicks",
        data: fbClicks[0],
      },
      {
        name: "Registrations",
        data: fbRegistered[0],
      },
    ],
  });

  Highcharts.chart("container3", {
    chart: {
      type: "column",
    },
    title: {
      text: "Instagram results by month",
    },
    xAxis: {
      categories: ["Jan"],
      //   crosshair: true,
    },
    yAxis: {
      min: 0,
      title: {
        text: "Instagram",
      },
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
      series: {
        label: {
          enabled: false,
        },
      },
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
      series: {
        label: {
          enabled: false,
        },
      },
    },
    series: [
      {
        name: "Ad Clicks",
        data: igClicks[0],
      },
      {
        name: "Registrations",
        data: igRegistered[0],
      },
    ],
  });
}
