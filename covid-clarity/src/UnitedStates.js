import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import MapUS from './Map';
import { MapContainer, TileLayer } from 'react-leaflet';
import { showUSDataOnMap } from './mapHelper';


export default function UnitedStates() {
  const [counties, setCounties] = useState([])



  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/jhucsse/counties')
      .then(response => response.json())
      .then(data => {
        const coordinates = data.map(county => (
          {
            lat: county.coordinates.latitude,
            long: county.coordinates.longitude
          }))
          setCounties(coordinates);
          console.log(counties)
  })}, [])  
  
return (
counties.map(element => {
  <div>
  <li>{element.latitude}</li>
  <p>Hello World</p>
  </div>
})
)

}