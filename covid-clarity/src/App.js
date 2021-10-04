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
  Paper
} from "@material-ui/core";
import Infobox from './Infobox';
import Map from './Map';
import Table from './Table'
import { sortHelper } from './helper';
import LineGraph from './LineGraph';
import "leaflet/dist/leaflet.css"
import { useMap } from 'react-leaflet';
import numeral from 'numeral';
import { orange } from '@material-ui/core/colors';

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
  const [mapCountries, setMapCountries] = useState([])
  const [savedCountryInfo, setSavedCountryInfo] = useState([])
  const [dataAge, setDataAge] = useState('All Time')
  const [mapCaseType, setMapCaseType] = useState('cases')
  const [select, setSelect] = useState('Sort By:')



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
          setMapCountries(data);
          // console.log(data);
        })
    }
    getCountriesData();
    // console.log('URL---_____________________->')
  }, [])

  
const onInfoBoxClick = (event) => {
  setMapCaseType(event.target.value)
  console.log(event.target.value)
  console.log("hello world")
}

  const onReverseButtonClick = (event) => {
    setSelect(event.target.value)
    const sortedData = sortHelper(tableData, event.target.value)
    setTableData(sortedData);
  }

  const onRecentButtonClick = () => {
    if (dataAge === 'All Time') {
      setSavedCountryInfo(countryInfo);
      setDataAge("24h")
      setCountryInfo(prevState => {
        prevState.cases = countryInfo.todayCases
        prevState.recovered = countryInfo.todayRecovered
        prevState.deaths = countryInfo.todayDeaths
        return { ...prevState };
      })
    } else setCountryInfo(savedCountryInfo)
  }




  const onCountryChange = async (event) => {
    // hooks are syncronous and so the code actually runs the fetch before updating the state.
    const countryCode = event
    // setUrl(`http://disease.sh/v3/covid-19/countries/${countryCode}`);
    if (countryCode !== 'worldwide') {
      setCountry(countryCode);
      // console.log(country);
      const url = `http://disease.sh/v3/covid-19/countries/${countryCode}`
      getData(url)
      setDataAge("All Time")
    } else {
      const url = 'http://disease.sh/v3/covid-19/all'
      getDataAll(url)
      console.log("lemmons")
    }


    // console.log('URL---->', url)
  }

  const getData = async (url) => {
    await fetch(url)
      .then(response => response.json())
      .then(data => {
        // console.log(countryInfo)
        console.log(data)
        setCountryInfo(data)
        setMapPosition([data.countryInfo.lat, data.countryInfo.long])
        setMapZoom(4);
        setSavedCountryInfo(data)
      })
  }
  const getDataAll = async (url) => {
    await fetch(url)
      .then(response => response.json())
      .then(data => {
        // console.log(countryInfo)
        console.log(data)
        setCountryInfo(data)
        setMapPosition({ lat: 45, lng: 10 })
        setMapZoom(4);
        setSavedCountryInfo(data)
      })
  }



  return (

    <div class="lines">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
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

          <div className="app__map">
            <Map caseType={mapCaseType} countries={mapCountries} zoom={mapZoom} center={mapCenter} position={mapPosition} />
          </div>
          <div className="app__stats">

            <Infobox
              value = "cases" onClick={onInfoBoxClick} title="Coronavirus cases" total={countryInfo.cases} cases={countryInfo.todayCases} />
            <Infobox
            onClick={(e) => setMapCaseType("recovered")}
            title="Recovered"
            // active={casesType === "recovered"}
            // cases={prettyPrintStat(countryInfo.todayRecovered)}
            total={numeral(countryInfo.recovered).format("0.0a")}
                  
            />
            <Infobox
              value = "deaths" onClick={onInfoBoxClick} title="Deaths" total={countryInfo.deaths} cases={countryInfo.todayDeaths} />
            <Paper onClick={onRecentButtonClick} elevation={2}
              style={{
                width: "150px",
                height: "100px",
                border: "1px solid grey",
                backgroundColor: "slategrey",
                borderRadius: "20px",
                position: "relative",
                marginTop: 10,
                font: "400 2em/90px 'Oswald', sans-serif",
                color: "#fbfbfb",
                textAlign: "center",
                // verticalAlign: "center",
              }}>
              <h4>{dataAge}</h4>
            </Paper>
          </div>
          


          {/* Map */}
        </div>
        <Card className="app__right">

          <CardContent>
            <div className="app__stats__top">
              <br></br>            
              <Button className="global" onClick={() => onCountryChange("worldwide")}> <p>WorldWide Cases: {countryInfo.cases}</p></Button>
              <Table onCountryChange={onCountryChange} allCountryInfo={countryInfo} countries={tableData} />

            <FormControl className="app__dropdown">
              <Select
                variant="outlined"
                value="alphabeticalDescending"
                onChange={onReverseButtonClick}>
                <MenuItem value='alphabeticalDescending'>Alphabetic [A to Z]</MenuItem>
                <MenuItem value='alphabeticalAscending'>Alphabetic [Z to A]</MenuItem>
                <MenuItem value='casesAscending'>Cases [highest to lowest]</MenuItem>
                <MenuItem value='casesDescending'>Cases [lowest to highest]</MenuItem>
              </Select>
            </FormControl>

            </div>
            {/* <p>{countryInfo.country}</p> */}
            {/* <p>{countryInfo.cases}</p> */}
            {/* <p>{countryInfo.deaths}</p> */}
            <div className="app__stats_bottom">
              
              <Card className="chart">
                <CardContent>
                  <LineGraph />
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

      </div>



    </div>
  )
}