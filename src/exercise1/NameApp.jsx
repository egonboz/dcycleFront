import React, { useState } from "react";
import NameForm from "./components/NameForm";
import NameDetails from "./components/NameDetails";
import { useFetch } from "../hooks/useFetch";

const NameApp = () => {
  const [name, setName] = useState("");
  const [genderUrl, setGenderUrl] = useState("");
  const [nationalizeUrl, setNationalizeUrl] = useState("");
  const [agifyUrl, setAgifyUrl] = useState("");

  const {
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
  } = useFetch(agifyUrl);

  const handleSubmit = (name) => {
    setName(name);
    setGenderUrl(`http://localhost:3200/api/genderize/${name}`);
    setNationalizeUrl(`http://localhost:3200/api/nationalize/${name}`);
    setAgifyUrl(`http://localhost:3200/api/agify/${name}`);
  };

  return (
    <div>
      <h1>Predicción de Nombre</h1>
      <NameForm onSubmit={handleSubmit} />
      <NameDetails
        genderData={genderData}
        nationalityData={nationalizeData}
        ageData={agifyData}
        isLoading={genderIsLoading || nationalizeIsLoading || agifyIsLoading}
        hasError={genderHasError || nationalizeHasError || agifyHasError}
      />
    </div>
  );
};

export default NameApp;
