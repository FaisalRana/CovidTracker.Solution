import { Circle, Popup } from "react-leaflet"
import numeral from "numeral"
import {React} from "react"


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


export const showDataOnMap = (data, casesType) =>
{
  console.log(data);
  data.map((country) => (
    <Circle
      center={[country.coordinates.latitude, country.coordinates.longitude]}
      color={casesTypeColors[casesType].hex}
      fillColor={casesTypeColors[casesType].hex}
      fillOpacity={0.4}
      radius={
        Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
      }
    >
      {/* <Popup styles={ `backgroundColor: 'grey'` }>
        <div className="container">
          <div><strong>{country.country}</strong></div>
          <div> <img
          src={country.countryInfo.flag}
          width="100"
          height="50"
          />
          </div>
          <div className="infoContainer">
          <div className="cases">Cases: {numeral(country.cases).format("0,0")}</div>
          <div className="recoverd">Recovered: {numeral(country.recovered).format("0,0")}</div> 
          <div className="deaths">Deaths: {numeral(country.deaths).format("0,0")}</div>
          </div>
          </div>
          </Popup>     */}
          </Circle>
  ))
}
  // export const showUSDataOnMap = (data, casesType="cases") =>
  // data.map((county) => (
  //   <Circle
  //     center={[county.coordinates.latitude, county.coordinates.longitude]}
  //     color={casesTypeColors[casesType].hex}
  //     fillColor={casesTypeColors[casesType].hex}
  //     fillOpacity={0.4}
  //     radius={
  //       Math.sqrt(county[casesType]) * casesTypeColors[casesType].multiplier
  //     }
  //   >  
  //     </Circle>
  // ))