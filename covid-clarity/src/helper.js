import { Circle, Popup } from "react-leaflet"
import numeral from "numeral"
import React from "react"

export const sortHelper = (data, caseType) => {
  const dataToSort = [...data]
// switch (caseType) {
//   case "casesAscending":
//     console.log("sort by ascnding cases")
//   case "casesDescending":
//     console.log("sort by descending cases")
// }
console.log(caseType)
if (caseType === "casesAscending") {
  dataToSort.sort((a, b) => b.cases - a.cases)
} else if(caseType ==="casesDescending") dataToSort.sort((a, b) => a.cases - b.cases)
else if(caseType ==="alphabeticalAscending") {
  dataToSort.sort((a, b) => b.country.localeCompare(a.country))
} else if(caseType === "alphabeticalDescending") {
  dataToSort.sort((a, b) => a.country.localeCompare(b.country))

}

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


export const showDataOnMap = (data, casesType) =>
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
          <div>Deaths: {numeral(country.deaths).format("0,0")}</div> 
          <div> <img
          src={country.countryInfo.flag}
          width="100"
          height="50"
        />
          </div>
      </Popup>    
      </Circle>
  ))