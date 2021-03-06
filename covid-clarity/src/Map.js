import React from 'react'
import {MapConsumer, MapContainer, TileLayer} from 'react-leaflet'
import {App, ChangeMapView} from './App'
import "./Map.css"
import { showDataOnMap, showUSDataOnMap } from './mapHelper'


function Map({mapState, states, countries, center, zoom, caseType, position}) {
  // const position = [51.505, -0.09];
  const mapFunction = (mapState, states, countries) => {
    
    if(mapState === "World") {
      return showDataOnMap(countries, caseType)
      } else {

        return showUSDataOnMap(states, caseType)
      }
  }
  
  return (
    <div className="map">
      <MapContainer center= {center} zoom={zoom}>
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/rastertiles/light_all/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
          <ChangeMapView coords={position} zoom={zoom} />
        {mapFunction(mapState, states, countries)}
      </MapContainer>
    </div>
  );
}
// export function Map({data, coordinates, center, zoom="3", caseType}) {
//   const position = [51.505, -0.09];
//   return (
//     <div className="map">
//       <MapContainer center= {position} zoom={zoom}>
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//         />
//         {/* <ChangeMapView coords={position} zoom={zoom} /> */}
//         {showUSDataOnMap(data, coordinates, "cases")}
//       </MapContainer>
//     </div>
//   );
// }

export default Map
