import React from "react";
import { LoadingMessage } from "../../components/LoadingMessage";

const NameDetails = ({
  genderData,
  nationalityData,
  ageData,
  isLoading,
  hasError,
}) => {
  if (isLoading) {
    return <LoadingMessage />;
  }

  if (hasError) {
    return <p>Error loading data.</p>;
  }

  return (
    <div>
      {genderData && (
        <div>
          <h2>Género</h2>
          <p>
            {genderData.gender} ({(genderData.probability * 100).toFixed(2)}%)
          </p>
        </div>
      )}
      {nationalityData && (
        <div>
          <h2>Nacionalidades</h2>
          {nationalityData.country.map((country) => (
            <p key={country.country_id}>
              {country.country_id} ({(country.probability * 100).toFixed(2)}%)
              <img
                src={`https://flagcdn.com/48x36/${country.country_id.toLowerCase()}.png`}
                alt={country.country_id}
                style={{ width: "36px", height: "24px" }}
              />
            </p>
          ))}
        </div>
      )}
      {ageData && (
        <div>
          <h2>Edad</h2>
          <p>{ageData.age}</p>
        </div>
      )}
    </div>
  );
};

export default NameDetails;
