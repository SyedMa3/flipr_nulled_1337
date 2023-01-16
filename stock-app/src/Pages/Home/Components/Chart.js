import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { useEffect } from "react";
import axios from "axios";

export default function Chart(props) {
  const [labels, setLabels] = useState([]);
  const [open, setOpen] = useState([]);
  const [diff, setdiff] = useState([]);
  console.log(props.company);
  useEffect(() => {
    const fetchData = async () => {
      // console.log("tt");
      let url = "https://nulled1337.pythonanywhere.com/data/company/";
      url = url + `${props.company}`;
      try {
        const response = await axios.get(`${url}`);
        console.log(response.data);
        let array = [];
        let price = [];
        let profit = [];
        for (let i of response.data.company_day) {
          let date = i.date;
          let date1 = date.replace(/-/g, "/");
          // console.log(date1);
          array.push(date1);
          price.push(Number(i.close));
          profit.push(Number(i.volume) / 100000);
        }
        setLabels(array);
        setOpen(price);
        setdiff(profit);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [props.company]);

  console.log(diff);
  // console.log(open);
  // console.log(labels);

  const series = [
    {
      name: "Volume(10^-5)",
      type: "column",
      // data: [
      //   [1327359600000, 20.95],
      //   [1327446000000, 11.34],
      //   [1327532400000, 51.18],
      //   [1327618800000, 41.05],
      //   [1327878000000, 21.0],
      // ],
      data: diff,
    },
    {
      name: "Closing",
      type: "area",
      // data: [
      //   [1327359600000, 30.95],
      //   [1327446000000, 31.34],
      //   [1327532400000, 31.18],
      //   [1327618800000, 31.05],
      //   [1327878000000, 31.0],
      // ],

      data: open,
    },
    // {
    //   name: "TEAM C",
    //   type: "line",
    //   data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
    // },
  ];

  const options = {
    chart: {
      height: 350,
      type: "line",
      stacked: false,
    },
    stroke: {
      width: [0, 2, 5],
    },
    plotOptions: {
      bar: {
        columnWidth: "50%",
      },
    },

    fill: {
      opacity: [0.85, 0.25, 1],
      gradient: {
        inverseColors: false,
        shade: "light",
        type: "vertical",
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100],
      },
    },
    labels: labels,
    markers: {
      size: 0,
    },
    xaxis: {
      type: "datetime",
      labels: {
        format: "yyyy/MM/dd",
      },
      tickAmount: 6,
    },
    yaxis: {},

    tooltip: {
      x: {
        format: "dd MMM yyyy",
      },
      shared: true,
      intersect: false,
      y: {
        formatter: function (y) {
          if (typeof y !== "undefined") {
            return y.toFixed(0) + " points";
          }
          return y;
        },
      },
    },
  };

  return (
    <div>
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={500}
      ></ReactApexChart>
    </div>
  );
}
