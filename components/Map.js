import mapboxgl from "mapbox-gl";
import React, { useEffect } from "react";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYW5hcy1tb2hhbW1hZCIsImEiOiJjbDJidjRwaXQwOGJpM2ZudTMyOHpyajZiIn0.SG1mVwHiG7aYgoWHYgeENw";
const Map = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
      center: [-99.29011, 39.39172],
      zoom: 3,
    });
  }, []);

  return (
    <div id="map" className="flex-1 h-full w-full">
      Map
    </div>
  );
};

export default Map;
