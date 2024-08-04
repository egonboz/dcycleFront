import React, { useState } from "react";
import NameForm from "./components/NameForm";
import NameDetails from "./components/NameDetails";
import { useFetch } from "../hooks/useFetch";
import "../css/exercise1/NameApp.css";
import genderDataJson from "../JsonResponses/genderize.json";
import nationalizeDataJson from "../JsonResponses/nationalize.json";
import agifyDataJson from "../JsonResponses/agify.json";

const NameApp = () => {
  const [name, setName] = useState("");
  const [genderUrl, setGenderUrl] = useState("");
  const [nationalizeUrl, setNationalizeUrl] = useState("");
  const [agifyUrl, setAgifyUrl] = useState("");
  const [inputSended, setInputSended] = useState(false);

  const [genderData, setGenderData] = useState(null);
  const [nationalizeData, setNationalizeData] = useState(null);
  const [agifyData, setAgifyData] = useState(null);

  /*  const {
    data: genderData,
    isLoading: genderIsLoading,
    hasError: genderHasError,
    errorMessage: genderErrorMessage,
  } = useFetch(genderUrl);
  const {
    data: nationalizeData,
    isLoading: nationalizeIsLoading,
    hasError: nationalizeHasError,
    errorMessage: nationalizeErrorMessage,
  } = useFetch(nationalizeUrl);
  const {
    data: agifyData,
    isLoading: agifyIsLoading,
    hasError: agifyHasError,
    errorMessage: agifyErrorMessage,
  } = useFetch(agifyUrl); */

  const handleSubmit = (name) => {
    setName(name);
    setGenderData(genderDataJson);
    setNationalizeData(nationalizeDataJson);
    setAgifyData(agifyDataJson);
    /* setGenderUrl(`http://localhost:3200/api/genderize/${name}`);
    setNationalizeUrl(`http://localhost:3200/api/nationalize/${name}`);
    setAgifyUrl(`http://localhost:3200/api/agify/${name}`); */
    setInputSended(true);
  };

  return (
    <div className="container">
      <h1>¿Quieres saber más acerca de tu nombre?</h1>
      <NameForm onSubmit={handleSubmit} />
      <br></br>
      <NameDetails
        genderData={genderData}
        nationalityData={nationalizeData}
        ageData={agifyData}
        /* isLoading={genderIsLoading || nationalizeIsLoading || agifyIsLoading}
        hasError={genderHasError || nationalizeHasError || agifyHasError} */
        isLoading={false || false || false}
        hasError={false || false || false}
        inputSended={inputSended}
      />
    </div>
  );
};

export default NameApp;
