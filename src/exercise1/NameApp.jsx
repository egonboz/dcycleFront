import React, { useState } from "react";
import axios from "axios";
import NameForm from "./components/NameForm";
import NameDetails from "./components/NameDetails";

const NameApp = () => {
  const [genderData, setGenderData] = useState(null);
  const [nationalityData, setNationalityData] = useState(null);
  const [ageData, setAgeData] = useState(null);

  const handleSubmit = async (name) => {
    try {
      const genderResponse = await axios.get(`/api/genderize/${name}`);
      const nationalityResponse = await axios.get(`/api/nationalize/${name}`);
      const ageResponse = await axios.get(`/api/agify/${name}`);

      setGenderData(genderResponse.data);
      setNationalityData(nationalityResponse.data);
      setAgeData(ageResponse.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <h1>Predicción de Nombre</h1>
      <NameForm onSubmit={handleSubmit} />
      <NameDetails
        genderData={genderData}
        nationalityData={nationalityData}
        ageData={ageData}
      />
    </div>
  );
};

export default NameApp;
