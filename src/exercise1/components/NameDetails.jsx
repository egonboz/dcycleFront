import React, { useEffect, useState } from "react";
import { Loading } from "../../components/Loading.jsx";
import { PieChart } from "../../components/PieChart.jsx";
import "../../css/exercise1/NameDetails.css";
import countriesMap from "../../JsonResponses/countriesMap.json"; // Ajusta la ruta según sea necesario

const NameDetails = ({
  genderData,
  nationalityData,
  ageData,
  isLoading,
  hasError,
  inputSended,
}) => {
  const [pieChartNationalityData, setPieChartNationalityData] = useState([]);
  const [pieChartNationalityImages, setPieChartNationalityImages] = useState(
    []
  );
  const [pieChartNationalityTexts, setPieChartNationalityTexts] = useState([]);
  const [pieChartGenderData, setPieChartGenderData] = useState([]);
  const [pieChartGenderImages, setPieChartGenderImages] = useState([]);
  const [pieChartGenderTexts, setPieChartGenderTexts] = useState([]);

  useEffect(() => {
    if (nationalityData && nationalityData.country) {
      const probabilities = nationalityData.country
        .map((country) => country.probability)
        .filter((probability) => probability !== null);
      const totalProbability = probabilities.reduce((a, b) => a + b, 0);
      const normalizedProbabilities = probabilities.map(
        (probability) => (probability / totalProbability) * 100
      );
      setPieChartNationalityData(normalizedProbabilities);
    }
  }, [nationalityData]);

  const getCountryName = (country_id) => {
    const lowerCaseCountryId = country_id.toLowerCase();
    return countriesMap[lowerCaseCountryId] || null;
  };

  const getCountryFlag = (country_id) => {
    const lowerCaseCountryId = country_id.toLowerCase();
    return `https://flagcdn.com/48x36/${lowerCaseCountryId}.png`;
  };

  useEffect(() => {
    if (nationalityData && nationalityData.country) {
      const names = nationalityData.country
        .map((country) => getCountryName(country.country_id))
        .filter((name) => name !== null);
      setPieChartNationalityTexts(names);
    }
  }, [nationalityData]);

  useEffect(() => {
    if (nationalityData && nationalityData.country) {
      const flags = nationalityData.country
        .map((country) => getCountryFlag(country.country_id))
        .filter((flag) => flag !== null);
      setPieChartNationalityImages(flags);
    }
  }, [nationalityData]);

  useEffect(() => {
    if (genderData && genderData.gender) {
      const genders = [];
      genders.push(genderData.gender);
      genders.push(getOppositeGender(genderData.gender));
      setPieChartGenderTexts(genders);
      const gendersImages = [];
      const maleImage =
        "https://img.icons8.com/?size=100&id=7702&format=png&color=7AD2DC";
      const femaleImage =
        "https://img.icons8.com/?size=100&id=7696&format=png&color=2F45F5";
      gendersImages.push(
        genderData.gender === "male" ? maleImage : femaleImage
      );
      gendersImages.push(
        genderData.gender === "male" ? femaleImage : maleImage
      );
      setPieChartGenderImages(gendersImages);
    }
  }, [genderData]);

  useEffect(() => {
    if (genderData && genderData.probability) {
      const probabilities = [];
      probabilities.push(genderData.probability * 100.0);
      probabilities.push(100.0 - genderData.probability * 100.0);
      setPieChartGenderData(probabilities);
    }
  }, [genderData]);

  useEffect(() => {
    if (genderData && genderData.probability) {
      const probabilities = [];
      probabilities.push(genderData.probability * 100);
      probabilities.push(100 - genderData.probability * 100);
      setPieChartGenderData(probabilities);
    }
  }, [genderData]);

  if (isLoading && inputSended) {
    return <Loading />;
  }

  if (hasError) {
    return <p>Error loading data.</p>;
  }

  if (genderData && genderData.count === 0) {
    return <p>No existe el nombre introducido.</p>;
  }

  const getOppositeGender = (gender) => {
    return gender === "male" ? "female" : "male";
  };

  return (
    <div className="cards-container">
      {genderData && (
        <div className="card">
          <h2>Género</h2>
          <PieChart
            data={pieChartGenderData}
            images={pieChartGenderImages}
            texts={pieChartGenderTexts}
          />
        </div>
      )}
      {ageData && (
        <div className="card">
          <h2>Edad</h2>
          <div className="circle">
            <div className="circle-text">{ageData.age}</div>
          </div>
        </div>
      )}
      {nationalityData && (
        <div className="card">
          <h2>Nacionalidades</h2>
          <PieChart
            data={pieChartNationalityData}
            images={pieChartNationalityImages}
            texts={pieChartNationalityTexts}
          />
        </div>
      )}
    </div>
  );
};

export default NameDetails;
