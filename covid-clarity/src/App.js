import React, { useEffect, useState } from 'react';
import './App.css';
import {
  MenuItem,
  FormControl, 
  Select,
} from "@material-ui/core";
// http://disease.sh/v3/covid-19/countries


export default function App() {
  const [countries, setCountries] = useState(['USA', 'Pakistan', "Canada"]);
  const [country, setCountry] = useState('worldwide')

  useEffect(() => {
    // async code will run only the first time the page renders.. and again anytime the variable in the second parameter changes. 
    const getCountriesData = async () => {
      await fetch ('http://disease.sh/v3/covid-19/countries')
      .then(response => response.json())
      .then(data => { 
        const countries =  data.map(country => (
          {
          name: country.country, 
          value: country.countryInfo.iso2 
        }))
        setCountries(countries)
      })
    }
    getCountriesData();
  })
  
  const onCountryChange =  (event) => {
    const countryCode = event.target.value
    setCountry(countryCode)
  }

  return ( 
      <div className="app">
        <div className="app__header">
        <h1>Covid-19 Clarity Project</h1>
        <FormControl className="app__dropdown">
          <Select
            variant="outlined"
            value={country}
            onChange={onCountryChange}>
            <MenuItem value='worldwide'>Worldwide</MenuItem>
            {countries.map(country => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      {/* InfoBoxs */}
      {/* InfoBoxs */}
      {/* InfoBoxs */}

      {/* Table */}
      {/* Graph */}

      {/* Map */}


      </div>
  )
}
