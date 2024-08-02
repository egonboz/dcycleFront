import React from "react";
import CovidDetails from "./components/CovidDetails";
import { useFetch } from "../hooks/useFetch";
import { LoadingMessage } from "../components/LoadingMessage";

const CovidApp = () => {
  const { data, isLoading, errorMessage, hasError } = useFetch(
    `http://localhost:3200/api/covid/historical`
  );

  return (
    <>
      <h1>Covid Data</h1>

      {isLoading && <LoadingMessage />}

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
    </>
  );
};

export default CovidApp;
