import "../Styles/Footer.css";
import vector from "../assets/Vector.png";
import vector1 from "../assets/Vector (1).png";
import vector2 from "../assets/Vector (2).png";
import searchIcon from "../assets/search-icon.png";
import videoIcon from "../assets/Video.png";
const Footer = () => {
  return (
    <div className="footer">
      <button className="footer-button">
        <img src={vector} alt="home icon" />
      </button>
      <button className="footer-button">
        <img src={searchIcon} alt="search icon" />
      </button>
      <button className="footer-button">
        <img src={videoIcon} alt="video icon" />
      </button>
      <button className="footer-button">
        <img src={vector1} alt="lock icon" />
      </button>
      <button className="footer-button">
        <img src={vector2} alt="love icon" />
      </button>
    </div>
  );
};

export default Footer;
