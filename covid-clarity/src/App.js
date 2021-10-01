import React, { useEffect, useState } from 'react';
import './App.css';
import './Table.css'
import {
  MenuItem,
  FormControl,
  Select,
  Card,
  CardContent,
  Button,
} from "@material-ui/core";
import Infobox from './Infobox';
import Map from './Map';
import Table from './Table'
import { sortHelper } from './sortHelper';
import LineGraph from './LineGraph';
import "leaflet/dist/leaflet.css"
import { useMap } from 'react-leaflet';

// http://disease.sh/v3/covid-19/countries
// http://disease.sh/v3/covid-19/countries/[country code]
// http://disease.sh/v3/covid-19/all //worldwide 
export function ChangeMapView({ coords, zoom }) {
  const map = useMap();
  map.setView(coords, zoom);

  return null;
}


export default function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide')
  const [countryInfo, setCountryInfo] = useState({})
  const [tableData, setTableData] = useState([])
  const [worldwideInfo, setWorldwideInfo] = useState([])
  const [mapCenter, setMapCenter] = useState({ lat: 10, lng: 100 })
  const [mapZoom, setMapZoom] = useState([2])
  const [mapPosition, setMapPosition] = useState({ lat: 45, lng: 10 })

  // const [url, setUrl] = useState('')

  useEffect(() => {
    fetch('http://disease.sh/v3/covid-19/all')
      .then(response => response.json())
      .then(data => {
        setCountryInfo(data)
        setWorldwideInfo(data)
      })
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

          const sortedData = sortHelper(data)
          setTableData(sortedData);
          setCountries(countries)
        })
    }
    getCountriesData();
    // console.log('URL---_____________________->')
  }, [])


  const onReverseButtonClick = () => {
    const sortedData = sortHelper(tableData)
    setTableData(sortedData);
  }

  const onCountryChange = async (event) => {
    // hooks are syncronous and so the code actually runs the fetch before updating the state.
    const countryCode = event.target.value
    const coordinates = ({ lat: 10, lng: 10 })
    setMapCenter(coordinates)
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
  }

  const getData = async (url) => {
    await fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setCountryInfo(data)
        setMapPosition([data.countryInfo.lat, data.countryInfo.long])
        setMapZoom(4);

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
          <Map zoom={mapZoom} center={mapCenter} position={mapPosition} />
        </div>


        {/* Map */}
      </div>
      <Card className="app__right">
        <CardContent>
        <div className="app__stats__top">
          <h3>Worldwide cases:</h3>
          <p>{worldwideInfo.cases}</p>
          <br></br>
          <h3>Live Cases by Country</h3>
          <Button variant="outlined" size="small" color="primary" onClick={onReverseButtonClick}>Reverse Order</Button>
          <Table countries={tableData} />
          </div>
          {/* <p>{countryInfo.country}</p> */}
          {/* <p>{countryInfo.cases}</p> */}
          {/* <p>{countryInfo.deaths}</p> */}
          <div className="app__stats_bottom">       
          <Card className="chart">
            <CardContent>
              <LineGraph  />
            </CardContent>
          </Card>
        </div>
        </CardContent>
      </Card>

    </div>




  )
}
