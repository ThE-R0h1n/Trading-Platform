import React, { useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { fetchMarketChart } from "@/State/Coin/Action";

const timeSeries = [
  {
    keyword: "DIGITAL_CURRENCY_DAILY",
    key: "Time Series(Daily)",
    lable: "1 Day",
    value: 1,
  },
  {
    keyword: "DIGITAL_CURRENCY_WEEKLY",
    key: "Weekly Time Series",
    lable: "1 Week",
    value: 7,
  },
  {
    keyword: "DIGITAL_CURRENCY_MONTHLY",
    key: "Monthly Time Series",
    lable: "1 Month",
    value: 30,
  },
  {
    keyword: "DIGITAL_CURRENCY_YEARLY",
    key: "Yearly Time Series",
    lable: "1 Year",
    value: 365,
  }
];

const Chart = ({coinId}) => {
  const dispatch = useDispatch();

  const {coin} = useSelector(store=>store);

  const [activeLable, setActiveLabel ] = React.useState(timeSeries[0]);
  const series = [
    {
      data: coin.marketChart.data ,
    },
  ];

  const options = {
    chart: {
      id: "area-datetime",
      type: "area",
      height: 450,
      zoom: {
        autoScaleYaxis: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      type: "datetime",
      tickAmount: 6,
    },
    markets: {
      colors: ["#fff"],
      strokeColor: "#fff",
      style: "hollow",
      size: 0,
      strokeWidth: 1,
    },
    tooltip: {
      theme: "dark",
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
    grid: {
      borderColor: "#47535E",
      strokeDashArray: 4,
      show: true,
    },
  };


  const handleActiveLabel = (value) => {
    setActiveLabel(value);
  };

  useEffect(() => {
    console.log("useEffect", coinId, activeLable);
    dispatch(fetchMarketChart({coinId,days: activeLable.value,jwt:localStorage.getItem("jwt")}));
  }, [dispatch,coinId,activeLable]);

  return (
    <div>
      <div className="space-x-3">
        {timeSeries.map((item) => 
          <Button
          variant={activeLable.lable == item.lable ? "" : "outline"  }
          onClick={()=>handleActiveLabel(item)}
          key={item.lable}>{item.lable}</Button>
        )}
      </div>
      <div id="chart-timelines">
        <ReactApexChart
          options={options}
          series={series}
          height={450}
          type="area"
        />
      </div>
    </div>
  );
};
export default Chart;
