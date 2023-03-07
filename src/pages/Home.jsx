import React from "react";
import SearchList from "../components/SearchList";
import SearchMap from "../components/SearchMap";
import { useStateValue } from "../StateProvider";
import "./Home.css";

export default function Home() {
  const [{ category, search, searchList }, dispatch] = useStateValue();

  console.log(searchList?.length == 0 ? "검색x" : "검색o");
  return (
    <div className="home">
      <div
        className="home-map"
        style={{ flex: searchList?.length == 0 ? "1" : "0.65" }}
      >
        <SearchMap />
      </div>
      {searchList?.length == 0 ? null : (
        <div className="home-list">
          <SearchList />
        </div>
      )}
    </div>
  );
}
