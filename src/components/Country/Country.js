import React from 'react';
import { Link } from 'react-router-dom';

const Country = (props) => {
  const {name,capital,numericCode}=props.country;
  const countryStyle={
    border: '1px solid purple',
    margin: '20px',
    padding: '20px',
    borderRadius: '20px'
  }
  return (
    <div style={countryStyle}>
      <h2>Country name: {name}</h2>
      <h2>Capital: {capital}</h2>
      <h2>Numeric code: <Link to={`/country/${name}`}>code detail of {numericCode}</Link> </h2>
    </div>
  );
};

export default Country;