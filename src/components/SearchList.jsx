import React from "react";
import { useStateValue } from "../StateProvider";
import SearchItem from "./SearchItem";
import "./SearchList.css";

export default function SearchList() {
  const [{ category, search, searchList }, dispatch] = useStateValue();

  return (
    <div className="searchlist">
      <h2 className="searchlist-title">{search + " " + category}</h2>
      {searchList.map((item) => (
        <SearchItem
          id={item.id}
          name={item.name}
          address={item.address}
          road_address={item.road_address}
          phone={item.phone}
          url={item.url}
        />
      ))}
    </div>
  );
}
