// src/CovidApp.js
import React, { useState } from "react";
import axios from "axios";
import CovidDetails from "./components/CovidDetails";

const CovidApp = () => {
  const [covidData, setCovidData] = useState(null);

  const handleFetch = async () => {
    try {
      const covidResponse = await axios.get(`/api/covid/historical`);
      setCovidData(covidResponse.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <h1>Covid Data</h1>
      <button onClick={handleFetch}>Fetch Covid Data</button>
      <CovidDetails covidData={covidData} />
    </div>
  );
};

export default CovidApp;
