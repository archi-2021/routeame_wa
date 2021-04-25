import { Loader } from "@googlemaps/js-api-loader";


const loader = new Loader({
  apiKey: "AIzaSyDfdsaAvMexdAJdlXyX-ad8UCI_q_iOJqU",
  version: "weekly",
});

const Maps = ({mountNodeId, mapRef }) => {
  const initMap = () => {
    loader.load().then(() => {
      mapRef.current = new google.maps.Map(document.getElementById(mountNodeId), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      })
    });
  }
}

export default Maps;