import React, { useEffect, useState } from "react";
import "../../css/exercise2/CovidDetails.css";
import { LineChart } from "@mui/x-charts/LineChart";

const CovidDetails = ({ covidData }) => {
  const [cases, setCases] = useState([]);
  const [testings, setTestings] = useState([]);
  const [deaths, setDeaths] = useState([]);
  const [days, setDays] = useState(360);
  const [todayData, setTodayData] = useState(null);

  const generateLabels = (start, end) => {
    const labels = [];
    for (let i = start; i >= end; i -= 30) {
      if (i === 0) {
        labels.push("Hoy");
      } else {
        labels.push(`Hace ${i} días`);
      }
    }
    return labels;
  };

  const xLabels = generateLabels(days, 0);

  useEffect(() => {
    if (covidData) {
      const newCases = [];
      const newTestings = [];
      const newDeaths = [];

      for (let i = 0; i < days; i += 30) {
        const index = days - i;
        if (index >= 0 && index < covidData.data.length) {
          newCases.push(covidData.data[index].cases.total.value);
          newTestings.push(covidData.data[index].testing.total.value);
          newDeaths.push(covidData.data[index].outcomes.death.total.value);
        } else {
          newCases.push(null);
          newTestings.push(null);
          newDeaths.push(null);
        }
      }

      setCases(newCases);
      setTestings(newTestings);
      setDeaths(newDeaths);
      setTodayData(covidData.data[0]);
    }
  }, [covidData, days]);

  if (!covidData || !todayData) {
    return <p>No data available</p>;
  }

  return (
    <>
      <div className="details-container">
        <h2>Covid Data today</h2>
        <div className="today-data-container">
          <div className="data-circle">
            <p>Cases</p>
            <span>{todayData.cases.total.value}</span>
          </div>
          <div className="data-circle">
            <p>Testings</p>
            <span>{todayData.testing.total.value}</span>
          </div>
          <div className="data-circle">
            <p>Deaths</p>
            <span>{todayData.outcomes.death.total.value}</span>
          </div>
        </div>
      </div>
      <div className="details-container">
        <h2>Covid Data Details One Year From Today</h2>
        <LineChart
          series={[
            { data: cases, name: "Cases", label: "Cases" },
            { data: testings, name: "Testings", label: "Testings" },
            { data: deaths, name: "Deaths", label: "Deaths" },
          ]}
          height={600}
          width={1100}
          xAxis={[{ scaleType: "point", data: xLabels }]}
          margin={{ top: 100, right: 100, bottom: 100, left: 100 }}
          tooltip={{ trigger: "item" }}
        />
      </div>
    </>
  );
};

export default CovidDetails;
