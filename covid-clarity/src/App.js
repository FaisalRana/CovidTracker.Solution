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
  Paper,
  FormGroup,
  Switch,
  FormControlLabel,
} from "@material-ui/core";
import { Infobox } from './Infobox';
import Infobox1 from './Infobox1';
import Map from './Map';
import Table from './Table'
import { sortHelper } from './helper';
import LineGraph from './LineGraph';
import "leaflet/dist/leaflet.css"
import { useMap } from 'react-leaflet';
import numeral from 'numeral';
import { orange } from '@material-ui/core/colors';
// import UnitedStates from './UnitedStates';
import AppHeader from './AppHeader'
import { getCoordinates, stateToCoordinates } from './coordinates'
import PieChart from './PieChart';
import $ from "jquery"
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
  const [country, setCountry] = useState('Worldwide')
  const [countryInfo, setCountryInfo] = useState({})
  const [tableData, setTableData] = useState([])
  const [vaccineInfo, setVaccineInfo] = useState([])
  const [mapCenter, setMapCenter] = useState({ lat: 10, lng: 100 })
  const [mapZoom, setMapZoom] = useState([2])
  const [mapPosition, setMapPosition] = useState({ lat: 45, lng: 10 })
  const [mapCountries, setMapCountries] = useState([])
  const [savedCountryInfo, setSavedCountryInfo] = useState([])
  const [dataAge, setDataAge] = useState('Total')
  const [mapCaseType, setMapCaseType] = useState('cases')
  const [statesInfo, setStatesInfo] = useState([])
  const [countriesData, setCountriesData] = useState([])
  const [toggleMap, setToggleMap] = useState("World")
  const [displayVaccineInfo, setdisplayVaccineInfo] = useState(22930000)
  const [statesVaccineInfo, setStatesVaccineInfo] = useState(22930000)
  const [show, toggleShow] = useState(true);

  


  const pieChartData = {
    labels: ['Cases', 'Population'],
    datasets: [
      {
        label: 'Rainfall',
        backgroundColor: [
          // '#B21F00',
          '#C9DE00',
          // '#2FDE00',
          '#00A6B4',
          '#6800B4'
        ],
        hoverBackgroundColor: [
          '#501800',
          '#4B5000',
          '#175000',
          '#003350',
          '#35014F'
        ],
        data: [countryInfo.cases, countryInfo.population]
      }
    ]
  }
  // worldwide cases 

  useEffect(() => {
    fetch('http://disease.sh/v3/covid-19/all')
      .then(response => response.json())
      .then(data => {
        setCountryInfo(data)
        // setWorldwideInfo(data)
        console.log(data)
      })
  }, [])

  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/vaccine/coverage/countries?lastdays=1&fullData=false')
      .then(response => response.json())
      .then(data => {
        setVaccineInfo(data)
        console.log("vaccineInfo", data)
        // console.log("vaccineInfo Detail", .filter(element => element.country === "Afghanistan"))
      })
  }, [])



  // worlwide by countries with coordinates
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
          setCountriesData(sortedData)
          setTableData(sortedData);
          // setCountries(countries)
          setMapCountries(data);
          // console.log(data);
        })
    }
    getCountriesData();
    // console.log('URL---_____________________->')
  }, [])

  //states data
  useEffect(() => {
    // async code will run only the first time the page renders.. and again anytime the variable in the second parameter changes. 
    const getStatesData = async () => {
      await fetch('https://disease.sh/v3/covid-19/states')
        .then(response => response.json())
        .then(data => {
          const statesFormatted = data.map(state => (
            {
              country: state.state,
              cases: state.cases,
              coordinates: stateToCoordinates(state.state),
              deaths: state.deaths,
              population: state.population,
              todayCases: state.todayCases,
              todayDeaths: state.todayDeaths
            }))
            const newState = statesFormatted.filter(element => element.coordinates !== undefined)
            setStatesInfo(newState);
            console.log("NewState", newState)
          },
        await fetch('https://disease.sh/v3/covid-19/vaccine/coverage/states?lastdays=1&fullData=false')
          .then(response => response.json())
          .then(data => {
              const statesVaccineData = data.map(state => (
                {
                  country: state.state,
                  vaccines: parseInt(Object.values(state.timeline))
                }))
          console.log("States Vaccine", statesVaccineData)
          setStatesVaccineInfo(statesVaccineData)
          // console.log(newState)
        }))
    }
    getStatesData();
  }, [])

  // useEffect(() => {}, toggleMap)

  const onInfoBoxClick = (event) => {
    setMapCaseType(event.target.value)

  }

  const onReverseButtonClick = (event) => {
    // setSelect(event.target.value)
    const sortedData = sortHelper(tableData, event.target.value)
    setTableData(sortedData);
  }

  const onDateAgeToggle = () => {
    if (toggleMap === "World") {
    if (dataAge === 'Total') {
      setDataAge("Last 24h")
      setCountryInfo(prevState => {
        prevState.cases = countryInfo.todayCases
        prevState.recovered = displayVaccineInfo
        prevState.deaths = countryInfo.todayDeaths
        return { ...prevState };
      })

    } else {
      onCountryChange(country)
      setDataAge("Total")
    }
  } else if (toggleMap === "US") {
    if (dataAge === 'Total') {
    setCountryInfo(prevState => {
      prevState.cases = mapCountries.filter(country => country.country === "USA")[0].todayCases
      // prevState.recovered = displayVaccineInfo
      prevState.deaths = mapCountries.filter(country => country.country === "USA")[0].todayDeaths
      setDataAge("Last 24h")
      return { ...prevState }
    })
  }  
  } else if  (toggleMap === "US") {
    console.log("ToggleMap: US, DataAge: 24", savedCountryInfo)
    setDataAge("Total")
    $('.dataAgeSwitch').hide();
    setCountryInfo(prevState => {
      prevState.cases = mapCountries.filter(country => country.country === "USA")[0].todayCases
      // prevState.recovered = displayVaccineInfo
      prevState.deaths = mapCountries.filter(country => country.country === "USA")[0].todayDeaths
      setDataAge("Last 24h")
      return { ...prevState };
    })
    setCountryInfo(country)
  }
  }

  const onTableToggle = () => {
    if (tableData !== statesInfo) {
      setTableData(statesInfo)
      setToggleMap("US")
      toggleShow(!show)
      // getData(`http://disease.sh/v3/covid-19/countries/USA`)
    }
    else {
      setTableData(countriesData)
      setToggleMap("World")
      toggleShow(!show)
    }
  }

  const onCountryChange = (countryInput) => {
    if (toggleMap === "World") {
      // hooks are syncronous and so the code actually runs the fetch before updating the state.
      const countryCode = countryInput
      if (countryInput)
        if (countryCode !== 'Worldwide') {
          setCountry(countryCode);
          const url = `http://disease.sh/v3/covid-19/countries/${countryCode}`
          getData(url)
          setDataAge("All Time")
          if(countryCode !== "Burundi")
          setdisplayVaccineInfo(...Object.values(vaccineInfo.filter((element => element.country === countryInput))[0].timeline));
        } else {
          const url = 'http://disease.sh/v3/covid-19/all'
          getDataAll(url)
        }
    } else {
      setMapPosition(stateToCoordinates(countryInput))
      setMapZoom(5)
      setCountryInfo(statesInfo.filter((element => element.country === countryInput))[0])

      if(countryInput !== "New York")
      setdisplayVaccineInfo(statesVaccineInfo.filter((element => element.country === countryInput))[0].vaccines)
    }
  }

  const getData = async (url) => {
    await fetch(url)
      .then(response => response.json())
      .then(data => {
        setCountryInfo(data)
        setMapPosition([data.countryInfo.lat, data.countryInfo.long])
        setMapZoom(5);
        setSavedCountryInfo(data)
      })
  }
  const getDataAll = async (url) => {
    await fetch(url)
      .then(response => response.json())
      .then(data => {
        setCountryInfo(data)
        setMapPosition({ lat: 45, lng: 10 })
        setMapZoom(2);
        setSavedCountryInfo(data)
      })
  }



  return (

    <div class="lines">

      <div className="app">

        <div className="app__left">
          <div className="app__header">
            <AppHeader currentCountry={country} />
          </div>

          <div className="app__map">
            <Map mapState={toggleMap} states={statesInfo} caseType={mapCaseType} countries={mapCountries} zoom={mapZoom} center={mapCenter} position={mapPosition} />
          </div>
          <div className="app__stats">
            <Paper className="pieChart"
              style={{
                // width: "150px",
                // height: "150px",
                border: "1px solid black",
                backgroundColor: "lightblue",
                borderRadius: "10px",
                // position: "relative",
                // margintop: 10,
                // font: "400 2em/90px 'Courier', sans-serif",
                // color: "#fbfbfb",
                borderAlign: "center",
                textAlign: "center",
                cursor: "pointer",
              }}>
              <PieChart data={pieChartData} />
            </Paper>

            <Infobox
              value="cases" onClick={onInfoBoxClick} title="Cases" total={countryInfo.cases} />
            <Infobox
              value="deaths" onClick={onInfoBoxClick} title="Deaths" total={countryInfo.deaths} />
            <Infobox1
              onClick={(e) => setMapCaseType("recovered")}
              title="Vaccinations (1x)"
              // active={casesType === "recovered"}
              // cases={prettyPrintStat(countryInfo.todayRecovered)}
              total={numeral(displayVaccineInfo).format("0.0a")}

            />
            <div className="app__stats_bottom">

            </div>

            {/* <Paper onClick={onDateAgeToggle} elevation={2}

              style={{
                width: "150px",
                height: "100px",
                border: "1px solid grey",
                backgroundColor: "orange",
                borderRadius: "20px",
                position: "relative",
                margintop: 10,
                font: "400 2em/90px 'Courier', sans-serif",
                color: "#fbfbfb",
                textAlign: "center",
                cursor: "pointer",
                // verticalAlign: "center",
              }}>
              <h4>{dataAge}</h4>
            </Paper> */}
          </div>

          {/* Map */}
        </div>
        <Paper style={{ backgroundColor: "smokeWhite", height: "41em" }} className="app__right">
          <div className="app__stats__top">
            <br></br>
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
            <Button className="global" onClick={() => onCountryChange("Worldwide")}> <p>View Worldwide Data</p></Button>
            <FormGroup className="switch">
              <FormControlLabel control={<Switch onChange={onTableToggle}  color="success" size="large" />} label="US/World" />
              {show && <FormControlLabel  className="dataAgeSwitch" control={<Switch onChange={onDateAgeToggle}  color="success" size="large" />} label={dataAge} />}
            </FormGroup>
          </div>
          {/* <p>{countryInfo.country}</p> */}
          {/* <p>{countryInfo.cases}</p> */}
          {/* <p>{countryInfo.deaths}</p> */}

        </Paper>

      </div>



    </div>
  )
}