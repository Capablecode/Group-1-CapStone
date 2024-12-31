import "../Styles/Mobile.css";
import { useState, useEffect } from "react";
import axios from "axios";
import DropDown from "../assets/Vin.png";
import User from "../assets/icon.png";
import Dots from "../assets/dots.png";
import AddIcon from "../assets/addicon.png";

const ProfilePage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = "https://instagram-scraper-api2.p.rapidapi.com/v1/info";
  const apiKey = "ac7fda31efmsh14ce044bd25514fp14533ajsn9f5b3b7f7084";

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(url, {
          params: {
            username_or_id_or_url: "mrbeast",
            url_embed_safe: true,
          },
          headers: {
            "x-rapidapi-key": apiKey,
            "x-rapidapi-host": "instagram-scraper-api2.p.rapidapi.com",
          },
        });
        if (response?.data?.data) {
          setData(response.data.data);
          console.log(response.data.data);
        } else {
          setError("No data received");
        }
      } catch (error) {
        console.log(error);
        setError(error.message || error.response.data || "error message");
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [url]);

  if (loading) return <h1>loading</h1>;

  
  return (
    <div className="instagram-profile">
      <div className="profile-picture">
        <img src={data.hd_profile_pic_url_info.url} alt="Profile" />
      </div>
      <div className="profile-details">
        <div className="profile-container">
          <h1 className="profile-username">{data.full_name}</h1>
          <button className="message-button">send a message</button>
          <button className="user-button">
            <img src={User} alt="user-id" />
          </button>
          <button className="DropDown-button">
            <img src={DropDown} alt="down" />
          </button>
          <div className="menu">
            <img src={Dots} alt="menu" />
          </div>
        </div>
        <div className="stats">
          <div>
            <strong>{data.media_count}</strong> Posts
          </div>
          <div>
            <strong>{data.follower_count}</strong> Followers
          </div>
          <div>
            <strong>{data.following_count}</strong> Following
          </div>
        </div>
      </div>

      {/* Bio Section */}
      <div className="profile-bio">
        <p className="bio-heading">
          <strong>Mediamodifier - Building Brands</strong>
        </p>
        <p className="bio-category">Product/service</p>
        <p className="bio-description">
          {data.biography}
          <span> </span>
        </p>
        <a className="bio-link" href="https://mediamodifier.com">
          mediamodifier.com
        </a>
        <p className="bio-signature">
          Signed by <strong>@InSend</strong>
        </p>
      </div>
      <div className="profile-actions">
        <button className="action-button follow-button">Follow</button>
        <button className="action-button message-button">Message</button>
        <div className="action-button icon-button">
          <img src={AddIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;




