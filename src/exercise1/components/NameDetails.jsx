import React from 'react';

const NameDetails = ({ genderData, nationalityData, ageData }) => {
  return (
    <div>
      {genderData && (
        <div>
          <h2>Género</h2>
          <p>{genderData.gender} ({(genderData.probability * 100).toFixed(2)}%)</p>
        </div>
      )}
      {nationalityData && (
        <div>
          <h2>Nacionalidades</h2>
          <ul>
            {nationalityData.country.map((country) => (
              <li key={country.country_id}>
                <img
                  src={`https://flagcdn.com/48x36/${country.country_id.toLowerCase()}.png`}
                  alt={country.country_id}
                  style={{ width: '48px', height: '36px' }}
                />
                {country.country_id} ({(country.probability * 100).toFixed(2)}%)
              </li>
            ))}
          </ul>
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
