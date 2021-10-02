import React from 'react'
import {MapConsumer, MapContainer, TileLayer} from 'react-leaflet'
import {App, ChangeMapView} from './App'
import "./Map.css"
import { showDataOnMap } from './helper'


function Map({countries, center, zoom, position}) {
  return (
    <div className="map">
      <MapContainer center= {center} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <ChangeMapView coords={position} zoom={zoom} />
        {showDataOnMap(countries, "cases")}
      </MapContainer>
    </div>
  );
}

export default Map
