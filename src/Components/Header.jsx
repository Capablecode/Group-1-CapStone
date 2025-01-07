import { useState } from "react";
import "../Styles/Header.css";
import logo from "../assets/instagram-logo.svg";
import menu1 from "../assets/Menu-Button-item.svg";
import menu2 from "../assets/Menu-Button-item (1).svg";
import menu3 from "../assets/Menu-Button-item (2).svg";
import menu4 from "../assets/Menu-Button-item (3).svg";
import menu5 from "../assets/Menu-Button-item (4).svg";
import backIcon from "../assets/back-icon.svg";
import dotIcon from "../assets/dot.svg";
import searchIcon from "../assets/search.svg";
import profilePics from "../assets/profile-pics.jpg";
import DarkMode from "./DarkMode";
const Header = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <header className="header">
      {/* Desktop View */}
      <div className="desktop-header">
        <img  src={logo} className="icond" />
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search"
            onChange={handleInputChange}
          />
          {inputValue.trim() === "" && (
            <img src={searchIcon} alt="search icond" className="search icon" />
          )}
        </div>
        <nav>
          <img src={menu1} alt="menu-button1" className="icons icond" />
          <img src={menu2} alt="menu-button1" className="icons icond" />
          <img src={menu3} alt="menu-button1" className="icons icond" />
          <img src={menu4} alt="menu-button1" className="icons icond" />
          <img src={menu5} alt="menu-button1" className="icons icond" />
          <img src={profilePics} alt="profile pics" className="profile-pics" />
        </nav>
      </div>

      {/* Mobile View */}
      <div className="mobile-header">
        <div className="flex">
          <button className="back-button">
            <img src={backIcon} alt="back icon" className="icond"/>
          </button>
          <h2>Username</h2>
        </div>

        <button className="menu-button">
          <img src={dotIcon} alt="tags icon" className="icond"/>
        </button>
      </div>

      <DarkMode />
    </header>
  );
};

export default Header;
