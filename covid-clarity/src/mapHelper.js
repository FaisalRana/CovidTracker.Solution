import { Circle, Popup } from "react-leaflet"
import numeral from "numeral"
import {React} from "react"
// import LineGraph from "./LineGraph";


const casesTypeColors = {
  cases: {
    hex: "#CC1034",
    rgb: "rgb(204, 16, 52)",
    multiplier: 100,
  },
  recovered: {
    hex: "#7dd71d",
    rgb: "rgb(125, 215, 29)",
    half_op: "rgba(125, 215, 29, 0.5)",
    multiplier: 1200,
  },
  deaths: {
    hex: "#fb4443",
    rgb: "rgb(251, 68, 67)",
    half_op: "rgba(251, 68, 67, 0.5)",
    multiplier: 2000,
  },
};


export const showDataOnMap =  (data, casesType) => {

// console.log(data)

 return  data.map((country, i) => ( 
    <Circle
      center={[country.countryInfo.lat, country.countryInfo.long]}
      color={casesTypeColors[casesType].hex}
      fillColor={casesTypeColors[casesType].hex}
      fillOpacity={0.4}
      radius={
        Math.sqrt(country.cases) * 50
      }
      
    >
      <Popup styles={ `backgroundColor: 'grey'` }>
        <div className="container">
          <div><strong>{country.country}</strong></div>
          <div> <img
          alt="flag"
          src={country.countryInfo.flag}
          width="100"
          height="50"
          />
          </div>
          <div className="infoContainer">
          <div className="cases">Cases: {numeral(country.cases).format("0,0")}</div>
          <div className="recoverd">Recovered: {numeral(country.recovered).format("0,0")}</div> 
          <div className="deaths">Deaths: {numeral(country.deaths).format("0,0")}</div>
          {/* <LineGraph /> */}
          </div>
          </div>
          </Popup>    
          </Circle>
  ))}
  // const StatesCoordinates = {
  //   "Alaska":	{coordinates: [63.588753,	-154.493062]},
  //   "Alabama": {coordinates:	[32.318231,	-86.902298]},
  //   "Arkansas": {coordinates:	[35.20105,	-91.831833]},
  //   "Arizona": {coordinates:	[34.048928,	-111.093731]},
  //   "California": {coordinates:	[36.778261,	-119.417932]},
  //   "Colorado": {coordinates:	[39.550051,	-105.782067]},
  //   "Connecticut": {coordinates:	[41.603221,	-73.087749]},
  //   "District of Columbia": {coordinates:	[38.905985,	-77.033418]},
  //   "Delaware": {coordinates:	[38.910832,	-75.52767]},
  //   "Florida": {coordinates:	[27.664827,	-81.515754]},
  //   "Georgia": {coordinates:	[32.157435,	-82.907123]},
  //   "Hawaii": {coordinates:	[19.898682,	-155.665857]},
  //   "Iowa": {coordinates:	[41.878003,	-93.097702]},
  //   "Idaho": {coordinates:	[44.068202,	-114.742041]},
  //   "Illinois": {coordinates:	[40.633125,	-89.398528]},
  //   "Indiana": {coordinates:	[40.551217,	-85.602364]},
  //   "Kansas": {coordinates:	[39.011902,	-98.484246]},
  //   "Kentucky": {coordinates:	[37.839333,	-84.270018]},
  //   "Louisiana": {coordinates:	[31.244823,	-92.145024]},
  //   "Massachusetts": {coordinates:	[42.407211,	-71.382437]},
  //   "Maryland": {coordinates:	[39.045755,	-76.641271]},
  //   "Maine": {coordinates:	[45.253783,	-69.445469]},
  //   "Michigan": {coordinates:	[44.31484,	-85.602364]},
  //   "Minnesota": {coordinates:	[46.729553,	-94.6859]},
  //   "Missouri": {coordinates:	[37.964253,	-91.831833]},
  //   "Mississippi": {coordinates:	[32.354668,	-89.398528]},
  //   "Montana": {coordinates:	[46.879682,	-110.362566]},
  //   "North Carolina": {coordinates:	[35.759573,	-79.0193]},
  //   "North Dakota": {coordinates:	[47.551493,	-101.002012]},
  //   "Nebraska": {coordinates:	[41.492537,	-99.901813]},
  //   "New Hampshire": {coordinates:	[43.193852,	-71.572395]},
  //   "New Jersey": {coordinates:	[40.058324,	-74.405661]},
  //   "New Mexico": {coordinates:	[34.97273,	-105.032363]},
  //   "Nevada": {coordinates:	[38.80261,	-116.419389]},
  //   "New York": {coordinates:	[43.299428,	-74.217933]},
  //   "Ohio": {coordinates:	[40.417287,	-82.907123]},
  //   "Oklahoma": {coordinates:	[35.007752,	-97.092877]},
  //   "Oregon": {coordinates:	[43.804133,	-120.554201]},
  //   "Pennsylvania": {coordinates:	[41.203322,	-77.194525]},
  //   "PuertoRico": {coordinates:	[18.220833,	-66.590149]},
  //   "RhodeIsland": {coordinates:	[41.580095,	-71.477429]},
  //   "South Carolina": {coordinates:	[33.836081,	-81.163725]},
  //   "South Dakota": {coordinates:	[43.969515,	-99.901813]},
  //   "Tennessee": {coordinates:	[35.517491,	-86.580447]},
  //   "Texas": {coordinates:	[31.968599,	-99.901813]},
  //   "Utah": {coordinates:	[39.32098,	-111.093731]},
  //   "Virginia": {coordinates:	[37.431573,	-78.656894]},
  //   "Vermont": {coordinates:	[44.558803,	-72.577841]},
  //   "Washington": {coordinates:	[47.751074,	-120.740139]},
  //   "Wisconsin": {coordinates:	[43.78444,	-88.787868]},
  //   "West Virginia": {coordinates:	[38.597626,	-80.454903]},
  //   "Wyoming": {coordinates:	[43.075968,	-107.290284]},
  // }
    
export const showUSDataOnMap = (statesInfo, casesType) => {

 return  statesInfo.map((state, i) => ( 
    <Circle
      center={state.coordinates}
      color={casesTypeColors[casesType].hex}
      fillColor={casesTypeColors[casesType].hex}
      fillOpacity={0.4}
      radius={
        Math.sqrt(state.cases) * 50
      }
      
    > <Popup styles={ `backgroundColor: 'grey'` }>
    <div className="container">
      <div><strong>{state.country}</strong></div>
      <div className="infoContainer">
      <div className="cases">Cases: {numeral(state.cases).format("0,0")}</div>
      <div className="recoverd">Deaths: {numeral(state.deaths).format("0,0")}</div> 
      <div className="deaths">Population: {numeral(state.population).format("0,0")}</div>
      {/* <LineGraph /> */}
      </div>
      </div>
      </Popup>    
            </Circle>
  ))}