import React, { useEffect, useState } from 'react';
import './App.css';
import {
  MenuItem,
  FormControl,
  Select,
  Card,
  CardContent,
} from "@material-ui/core";
import Infobox from './Infobox';
import Map from './Map';
import Table from './Table'


// http://disease.sh/v3/covid-19/countries
// http://disease.sh/v3/covid-19/countries/[country code]
// http://disease.sh/v3/covid-19/all //worldwide 

export default function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide')
  const [countryInfo, setCountryInfo] = useState({})
  const [tableData, setTableData] = useState([])
  const [worldwideInfo, setWorldwideInfo] = useState([])
  // const [url, setUrl] = useState('')

  useEffect(() => {
    fetch('http://disease.sh/v3/covid-19/all')
      .then(response => response.json())
      .then(data => {
        setCountryInfo(data)
        setWorldwideInfo(data)
      })
    // console.log('URL---********************>')
  }, [])



  useEffect(() => {
    // async code will run only the first time the page renders.. and again anytime the variable in the second parameter changes. 
    const getCountriesData = async () => {
      await fetch('http://disease.sh/v3/covid-19/countries')
        .then(response => response.json())
        .then(data => {
          const countries = data.map(country => (
            {
              name: country.country,
              value: country.countryInfo.iso2
            }))
          setTableData(data);
          setCountries(countries)
        })
    }
    getCountriesData();
    // console.log('URL---_____________________->')
  }, [])

  const onCountryChange = async (event) => {
    // hooks are syncronous and so the code actually runs the fetch before updating the state.
    const countryCode = event.target.value
    // setUrl(`http://disease.sh/v3/covid-19/countries/${countryCode}`);
    if (countryCode !== 'worldwide') {
      setCountry(countryCode);
      console.log(country);
      const url = `http://disease.sh/v3/covid-19/countries/${countryCode}`
      getData(url)
    } else {
      const url = 'http://disease.sh/v3/covid-19/all'
      getData(url)
    }


    // console.log('URL---->', url)
    console.log('Country Info >>>', countryInfo)
  }

  const getData = async (url) => {
    await fetch(url)
      .then(response => response.json())
      .then(data => {
        setCountryInfo(data)
      })
  }



  return (
    <div className="app">
      <div className="app__left">
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
        <div className="app__stats">
          <Infobox
            title="Coronavirus cases" total={countryInfo.cases} cases={countryInfo.todayCases} />
          <Infobox
            title="Recovered" total={countryInfo.recovered} cases={countryInfo.todayRecovered} />
          <Infobox
            title="Deaths" total={countryInfo.deaths} cases={countryInfo.todayDeaths} />
        </div>
        <div className="app__map">
          <Map />
        </div>


        {/* Map */}
      </div>
      <Card className="app__right">
        <CardContent>
          <h3>Worldwide cases:</h3>
          <p>{worldwideInfo.cases}</p>
          <br></br>

          <h3>Live Cases by Country</h3>
          <Table striped bordered hover countries={tableData} />
          <p>{countryInfo.country}</p>
          <p>{countryInfo.cases}</p>
          <p>{countryInfo.deaths}</p>

          {/* Graph */}
        </CardContent>

      </Card>

    </div>

  )
}
