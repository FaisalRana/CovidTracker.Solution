import React from 'react'
import {MapConsumer, MapContainer, TileLayer} from 'react-leaflet'
import {App, ChangeMapView} from './App'
import "./Map.css"
import { showDataOnMap } from './mapHelper'


function Map({countries, center, zoom, caseType}) {
  const position = [51.505, -0.09];
  return (
    <div className="map">
      <MapContainer center= {position} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* <ChangeMapView coords={position} zoom={zoom} /> */}
        {showDataOnMap(countries, caseType)}
      </MapContainer>
    </div>
  );
}

export default Map
