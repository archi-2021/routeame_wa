import React from 'react';
import GoogleMapReact from 'google-map-react';

const Maps = ({center, zoom, handleApiLoaded }) => {

  return <GoogleMapReact
    bootstrapURLKeys={{ key: 'AIzaSyDfdsaAvMexdAJdlXyX-ad8UCI_q_iOJqU', libraries:['geometry'],}}
    defaultCenter={center}
    defaultZoom={zoom}
    yesIWantToUseGoogleMapApiInternals={true}
    onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
  >
  </GoogleMapReact>
}

export default Maps;