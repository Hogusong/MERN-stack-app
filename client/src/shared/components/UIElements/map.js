import React, { useRef, useEffect } from "react";

const Map = props => {
  const mapRef = useRef();
  const { center, zoom } = props;

  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, { center, zoom });
  
    new window.google.maps.Marker({ position: center, map: map })
  
  }, [center, zoom]);

  return <div ref={mapRef} className={`map ${props.className}`} style={props.style}>

  </div>
}

export default Map;