import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import fetchData from "./fetchData";

export default function AreaChart(props) {
  const [data, setdata] = useState([]);

  console.log(props.stock);

  useEffect(() => {
    const fetchData = async () => {
      console.log("tt");
      let url = "https://nulled1337.pythonanywhere.com/data/market/";
      if (props.stock === "nse") {
        url = url + `${props.stock}` + "vcsv";
      } else {
        url = url + `${props.stock}` + "nscsv";
      }
      try {
        const response = await axios.get(`${url}`);
        //   console.log(response.data.market_day);
        let array = [];
        for (let i of response.data.market_day) {
          let date = i.date;
          let date1 = date.replace(/-/g, " ");
          date1 = date1 + " 00:00:00 GMT";
          //   console.log(date1);
          let data = Date.parse(date);
          array.push([data, Number(i.open)]);
        }
        setdata(array);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [props.stock]);

  console.log(data);
  const series1 = [
    {
      data: data,
    },
  ];

  const options = {
    responsive: [
      {
        breakpoint: 1000,
        options: {
          plotOptions: {
            bar: {
              horizontal: false,
            },
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
    chart: {
      id: "area-datetime",
      type: "area",
      height: 350,
      zoom: {
        autoScaleYaxis: true,
      },
      toolbar: {
        show: true,
        tools: {
          download: true,
          selection: true,
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan: true,
        },
      },
    },
    annotations: {
      yaxis: [
        {
          y: 30,
          borderColor: "#999",
        },
      ],
      xaxis: [
        {
          x: new Date("15 Jan 2018").getTime(),
          borderColor: "#999",
          yAxisIndex: 0,
        },
      ],
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
      style: "hollow",
    },
    xaxis: {
      type: "datetime",
      min: new Date("15 Jan 2018").getTime(),
      tickAmount: 6,
    },
    tooltip: {
      x: {
        format: "dd MMM yyyy",
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 100],
      },
    },
  };

  return (
    <ReactApexChart
      options={options}
      series={series1}
      type="area"
      height={300}
      width={400}
    ></ReactApexChart>
  );
}
