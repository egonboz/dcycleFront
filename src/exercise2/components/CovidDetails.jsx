import React from "react";

const CovidDetails = ({ covidData }) => {
  if (!covidData) {
    return <p>No data available</p>;
  }

  return (
    <div>
      <h2>Covid Data Details</h2>
      <pre>{JSON.stringify(covidData, null, 2)}</pre>
    </div>
  );
};

export default CovidDetails;
