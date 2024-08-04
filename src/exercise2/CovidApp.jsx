import React from "react";
import CovidDetails from "./components/CovidDetails";
import { useFetch } from "../hooks/useFetch";
import { Loading } from "../components/Loading";
import "../css/exercise2/CovidApp.css"; // Ensure you import the CSS

const CovidApp = () => {
  const { data, isLoading, errorMessage, hasError } = useFetch(
    `http://localhost:3200/api/covid/historical`
  );

  return (
    <div className="container">
      <h1>Covid Data</h1>

      {isLoading && <Loading />}

      {hasError && (
        <p>
          Error: {errorMessage.code} - {errorMessage.message}
        </p>
      )}

      {!isLoading && !hasError && (
        <div>
          <CovidDetails covidData={data} />
        </div>
      )}
    </div>
  );
};

export default CovidApp;
