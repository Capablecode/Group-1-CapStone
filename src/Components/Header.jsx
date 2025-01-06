import { useState } from "react";
import "../Styles/Header.css";
import logo from "../assets/instagram-logo.png";
import menu1 from "../assets/Menu-Button-item (1).png";
import menu2 from "../assets/Menu-Button-item (2).png";
import menu3 from "../assets/Menu-Button-item (3).png";
import menu4 from "../assets/Menu-Button-item (4).png";
import menu5 from "../assets/Menu-Button-item (5).png";
import backIcon from "../assets/back-icon.png";
import dotIcon from "../assets/dot.png";
import searchIcon from "../assets/search.png";
import profilePics from "../assets/profile-pics.jpg";
const Header = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <header className="header">
      {/* Desktop View */}
      <div className="desktop-header">
        <img src={logo} />
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search"
            onChange={handleInputChange}
          />
          {inputValue.trim() === "" && (
            <img src={searchIcon} alt="search icon" className="search" />
          )}
        </div>
        <nav>
          <img src={menu1} alt="menu-button1" className="icons" />
          <img src={menu2} alt="menu-button1" className="icons" />
          <img src={menu3} alt="menu-button1" className="icons" />
          <img src={menu4} alt="menu-button1" className="icons" />
          <img src={menu5} alt="menu-button1" className="icons" />
          <img src={profilePics} alt="profile pics" className="profile-pics" />
        </nav>
      </div>

      {/* Mobile View */}
      <div className="mobile-header">
        <div className="flex">
          <button className="back-button">
            <img src={backIcon} alt="back icon" />
          </button>
          <h2>Username</h2>
        </div>

        <button className="menu-button">
          <img src={dotIcon} alt="tags icon" />
        </button>
      </div>
    </header>
  );
};

export default Header;
