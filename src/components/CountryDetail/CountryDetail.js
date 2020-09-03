import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetail = () => {
  const {countryNumericCode}=useParams();
  const [country,setCountry]=useState({});
  useEffect(()=>{
    const url=`https://restcountries.eu/rest/v2/name/${countryNumericCode}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>setCountry(data[0]))
  },[countryNumericCode])
  return (
    <div>
      <h1>This Is Country Detail Component: {countryNumericCode}</h1>
      <h2>{country.name}</h2>
    </div>
  );
};

export default CountryDetail;