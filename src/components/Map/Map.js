import React, { useRef, useCallback } from "react";
import {  
  GoogleMap,
  useLoadScript,
  InfoWindow,
  Marker,
} from "@react-google-maps/api";
// import OutsideClickHandler from 'react-outside-click-handler';
// import { MAP_SETTINGS } from './mapConstants';
// import mapStyles from './mapStyles.json';
// import archStyles from "../../data/styles/archstyles";


const libraries = ["places"];
const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};
const center = {
  lat: 50.0871,
  lng: 14.4207,
};

export default function Map(props) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";
    return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={14}
        center={center}
        onLoad={onMapLoad}
      >
        {props.archStyles.map(archStyle => (
        <div>
            {archStyle.placesArray.map(place => (
        <div>
        <Marker 
          key={place.marker.lat}
          position={place.marker}
          onClick={() => {
            props.setSelected(place.marker.lat);
          }}
          />
          { props.selected === place.marker.lat && (
          <InfoWindow 
          position={place.marker}
          onCloseClick={() => props.setSelected(null)}
          style={{ bottom: "45px" }}>
          <p>{place.placeName}</p>
          {/* <OutsideClickHandler /> */}
          </InfoWindow>)}
          </div>
          ))}
        </div>
        ))}
      </GoogleMap>
    </div>
  );
};

