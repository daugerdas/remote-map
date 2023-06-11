import { useState, useCallback, memo } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import spots from "../data/spots.json";
import MapMarker from "./MapMarker";

const options = {
  mapId: ["71ee7454ab23f641"],
  disableDefaultUI: true,
};

const containerStyle = {
  width: "100vw",
  height: "100vh",
};

const center = {
  lat: 54.6854775,
  lng: 25.2798495,
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "71ee7454ab23f641",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    map.setZoom(14);
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={5}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={options}
    >
      {/* Child components, such as markers, info windows, etc. */}
      {spots.map(({ id, name, position, address, category }) => (
        <MapMarker
          id={id}
          name={name}
          position={position}
          address={address}
          category={category}
        />
      ))}
    </GoogleMap>
  ) : (
    <></>
  );
}

export default memo(Map);
