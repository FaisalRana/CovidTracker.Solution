import React, { useState } from 'react';
import './App.css';
import {
  MenuItem,
  FormControl, 
  Select,
} from "@material-ui/core";

export default function App() {
  const [countries, setCountries] = useState([
'USA', 'Pakistan', "Canada"
  ]);
  return (
      <div className="app">
        <div className="app__header">
        <h1>Covid-19 Clarity Project</h1>
      <FormControl className="app__dropdown">
        <Select
          variant="outlined"
          value="abc"
        >

          {countries.map(country => (
            <MenuItem value={country}>{country}</MenuItem>

          ))}

        </Select>
      </FormControl>
        </div>

      
      {/* Header */}
      {/* Title Select input dropdown field  */}

      {/* InfoBoxs */}
      {/* InfoBoxs */}
      {/* InfoBoxs */}

      {/* Table */}
      {/* Graph */}

      {/* Map */}


      </div>
  )
}
