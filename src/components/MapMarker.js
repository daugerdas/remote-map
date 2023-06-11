import { useState } from "react";
import { Marker, InfoWindow } from "@react-google-maps/api";

function MapMarker(props) {
  const [modalOpen, setModalOpen] = useState(false);
  const { id, position, name, address, category } = props;

  return (
    <Marker
      key={id}
      position={position}
      onClick={() => setModalOpen(true)}
      icon={{ url: require(`../assets/${category}.svg`), scale: 6 }}
    >
      {modalOpen ? (
        <InfoWindow onCloseClick={() => setModalOpen(false)}>
          <>
            <strong>{name}</strong>
            <div>{address}</div>
          </>
        </InfoWindow>
      ) : null}
    </Marker>
  );
}

export default MapMarker;
