// import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types'
// import {Map} from './Map';
// import { MapContainer, TileLayer } from 'react-leaflet';
// // import { showUSDataOnMap } from './mapHelper';


// export default function UnitedStates() {
//   const [counties, setCounties] = useState([])
//   const [mapData, setMapData] = useState({})



//   useEffect(() => {
//     fetch('https://disease.sh/v3/covid-19/jhucsse/counties')
//       .then(response => response.json())
//       .then(data => {
//         const coordinates = data.map(county => (
//           {
//             lat: county.coordinates.latitude,
//             long: county.coordinates.longitude
//           }))
//           setCounties(coordinates)
//           setMapData(mapData)
//   })
//  }, [])  
  
// return (
// <div>
// <Map data={mapData} coordinates={counties}/>
//   {counties.map(element => 
//   <div>
//     <li>Latidude: {element.lat}</li>
//     <li>Longitude: {element.long}</li>
//   </div>
//     )}
// </div>

// )}
