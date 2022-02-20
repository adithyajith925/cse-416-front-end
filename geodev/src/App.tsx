import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON} from 'react-leaflet';
import L from 'leaflet';
import state_boundries from './data/state_boundaries.json';

function App() {

  return (
    <MapContainer 
        center={[37, -95]} 
        zoom={4.5}
        maxBounds={L.latLngBounds(L.latLng(24.5, -124.7), L.latLng(49.4, -67))}
        minZoom={4}
        zoomSnap={.5}
        >
          <GeoJSON data={state_boundries.features.}/>
      {/* <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      /> */}
    </MapContainer>
  );
}

export default App;
