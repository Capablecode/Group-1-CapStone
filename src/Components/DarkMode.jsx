import { useState } from "react";
import sunIcon from "../assets/favicon.svg";
import moonIcon from "../assets/favicon.svg";
import "../Styles/DarkMode.css";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  };
  return (
    <div
      tabIndex="0"
      onClick={toggleDarkMode}
      className={`dark-mode-toggle ${darkMode ? "dark-mode-enabled" : ""}`}
    >
      <div className="toggle-circle"></div>
      <img src={sunIcon} alt="Light Mode Icon" className="icon icon-sun" />
      <img src={moonIcon} alt="Dark Mode Icon" className="icon icon-moon" />
  
    </div>
  );
};

export default DarkMode;
