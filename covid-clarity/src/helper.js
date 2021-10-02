import { Circle, Popup } from "react-leaflet"
import numeral from "numeral"
import React from "react"

export const sortHelper = (data) => {
  const dataToSort = [...data]

if (dataToSort[0].cases > dataToSort[1].cases) {
  dataToSort.sort((a, b) => a.cases - b.cases)
} else  dataToSort.sort((a, b) => b.cases - a.cases)

  return dataToSort;
}


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


export const showDataOnMap = (data, casesType = "cases") =>
  data.map((country) => (
    <Circle
      center={[country.countryInfo.lat, country.countryInfo.long]}
      color={casesTypeColors[casesType].hex}
      fillColor={casesTypeColors[casesType].hex}
      fillOpacity={0.4}
      radius={
        Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
      }
    >
      <Popup  styles={ `backgroundColor: 'grey'` }>
          <div>{country.country}</div>
          <div>Cases: {numeral(country.cases).format("0,0")}</div>
          <div>Recovered: {numeral(country.recovered).format("0,0")}</div> 
          <div>Recovered: {numeral(country.deaths).format("0,0")}</div> 
          <div> <img
          src={country.countryInfo.flag}
          width="100"
          height="50"
        />
          </div>
      </Popup>
      </Circle>
  ))