import React, { useEffect, useRef } from "react";
import { useStateValue } from "../StateProvider";
import "./SearchItem.css";

export default function SearchItem({
  id,
  name,
  address,
  road_address,
  phone,
  url,
}) {
  const [{ focusItem }, dispatch] = useStateValue();

  const myRef = useRef(null);

  useEffect(() => {
    myRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [focusItem]);

  return (
    <div className="searchitem">
      <div
        ref={focusItem?.id == id ? myRef : null}
        className="searchitem-card"
        style={{
          border: focusItem?.id == id ? "3px solid blue" : "1px solid #566270",
        }}
      >
        <a href={url}>
          <span className="searchitem-name">{name}</span>
          <span className="searchitem-road-address">{road_address}</span>
          <span className="searchitem-address">
            <small className="searchitem-number-address"> </small>
            {address}
          </span>
          <span className="searchitem-phone">{phone}</span>
        </a>
      </div>
    </div>
  );
}
