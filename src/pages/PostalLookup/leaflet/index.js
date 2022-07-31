import React from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";


function SetViewOnClick({ coords }) {
  const map = useMap();
  map.setView(coords, map.getZoom());

  return null;
}

const Leaflet = ({ latitude, longitude }) => {
  return (
    <MapContainer
      center={{ lat: latitude, lng: longitude }}
      zoom={13}
      scrollWheelZoom={false}
      style={{ width: "100%", height: "600px" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <SetViewOnClick coords={[latitude, longitude]} />
    </MapContainer>
  );
};

export default Leaflet;
