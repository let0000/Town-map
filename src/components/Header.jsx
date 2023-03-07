import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";

export default function Header() {
  const [{ category, search }, dispatch] = useStateValue();
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("");

  const addData = () => {
    dispatch({
      type: "ADD_TO_CATEGORY",
      category: selectValue,
    });
    dispatch({
      type: "ADD_TO_SEARCH",
      search: inputValue,
    });
  };

  const onChangeSelect = (e) => {
    setSelectValue(e.target.value);
  };

  const onChangInput = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="header">
      <Link to="/townMap" className="logo">
        <img
          className="header-logo"
          src="https://cdn1.iconfinder.com/data/icons/icons-for-a-site-1/64/advantage_nearby-256.png"
          alt="로고 이미지"
        />
        <h2 className="header-logo-title">TownMap</h2>
      </Link>

      <div className="header-search">
        <select onChange={onChangeSelect} className="header-searchCategory">
          <option value="">장소 + 키워드</option>
          <option value="맛집">맛집</option>
          <option value="편의점">편의점</option>
          <option value="화장실">화장실</option>
          <option value="은행">은행</option>
          <option value="주차장">주차장</option>
        </select>
        <input
          value={inputValue}
          onChange={onChangInput}
          type="text"
          className="header-searchInput"
        />
        <SearchIcon onClick={addData} className="header-searchIcon" />
      </div>
    </div>
  );
}
