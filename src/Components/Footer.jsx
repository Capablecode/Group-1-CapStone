import "../Styles/Footer.css";
import vector from "../assets/Vector.svg";
import vector1 from "../assets/Vector (1).svg";
import vector2 from "../assets/Vector (2).svg";
import searchIcon from "../assets/search-icon.svg";
import videoIcon from "../assets/Video.svg";
const Footer = () => {
  return (
    <div className="footer">
      <button className="footer-button">
        <img src={vector} className="icond" alt=" home icon" />
      </button>
      <button className="footer-button">
        <img src={searchIcon} className="icond" alt=" search icon" />
      </button>
      <button className="footer-button">
        <img src={videoIcon} className="icond" alt=" video icon" />
      </button>
      <button className="footer-button">
        <img src={vector1} className="icond" alt=" lock icon" />
      </button>
      <button className="footer-button">
        <img src={vector2} className="icond" alt=" love icon" />
      </button>
    </div>
  );
};

export default Footer;
