/*global kakao*/
import React, { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useStateValue } from "../StateProvider";
import "./SearchMap.css";

export default function SearchMap() {
  const [{ category, search, searchList, focusItem }, dispatch] =
    useStateValue();

  const [info, setInfo] = useState();
  const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState();
  const [focus, setFocus] = useState("");

  useEffect(() => {
    if (!map) return;

    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(search + category, (data, status, _pagination) => {
      if (status == kakao.maps.services.Status.OK) {
        const bounds = new kakao.maps.LatLngBounds();
        console.log(bounds);
        let markers = [];
        console.log(data);

        for (var i = 0; i < data.length; i++) {
          markers.push({
            position: {
              lat: data[i].y,
              lng: data[i].x,
            },
            id: data[i].id,
            name: data[i].place_name,
            address: data[i].address_name,
            road_address: data[i].road_address_name,
            phone: data[i].phone,
            url: data[i].place_url,
          });

          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }
        setMarkers(markers);

        dispatch({
          type: "ADD_TO_SEARCHLIST",
          searchList: markers,
        });

        map.setBounds(bounds);
      }
    });
  }, [search, category]);

  useEffect(() => {
    dispatch({
      type: "ADD_TO_FOCUSITEM",
      focusItem: info,
    });
  }, [info]);

  return (
    <Map
      center={{
        lat: 37.566826,
        lng: 126.9786567,
      }}
      style={{
        width: "100%",
        height: "100vh",
      }}
      level={3}
      onCreate={setMap}
    >
      {markers.map((marker) => (
        <MapMarker
          key={`marker-${marker.name}-${marker.position.lat},${marker.position.lng}`}
          position={marker.position}
          onClick={() => setInfo(marker)}
        >
          {info && info.id === marker.id && (
            <div className="searchmap-info">
              <p>{marker.name}</p>
            </div>
          )}
        </MapMarker>
      ))}
    </Map>
  );
}
