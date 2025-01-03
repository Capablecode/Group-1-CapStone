import axios from "axios";
import { useState } from "react";
import "../Styles/Highlight.css";

const Highlight = () => {
  const [stories, setStories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const categories = ["Templates", "Reviews", "Mentions", "Tips", "Blog"];

  const fetchStories = async (category) => {
    try {
      const options = {
        method: "GET",
        url: "https://instagram-scraper-api2.p.rapidapi.com/v1/highlight_info",
        params: { highlight_id: "17907964880010937" },
        headers: {
          "X-RapidAPI-Key": "a3e7b81b-aa7d-4ef8-8cd4-9938195a1f3e",
          "X-RapidAPI-Host": "instagram-scraper-api2.p.rapidapi.com",
        },
      };

      console.log("Fetching stories for category:", category);
      const response = await axios.request(options);
      console.log("API response:", response.data);

      setStories(response.data.items || []);
      setSelectedCategory(category);
    } catch (error) {
      console.error(
        "Error fetching data:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <div className="app">
      <header className="header"></header>
      <div className="circular-container">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`circle-container`}
            onClick={() => fetchStories(category)}
          >
            <div className={`circle ${index % 2 === 0 ? "red" : "blue"}`}>
              <div className="heart">❤</div>
            </div>
            <p className="circle-text">{category}</p>
          </div>
        ))}
      </div>
      <div className="stories">
        {selectedCategory && <h2>{selectedCategory} Stories</h2>}
        {stories.length > 0 ? (
          stories.map((story, index) => (
            <div key={index} className="story">
              <img
                src={story.media_url || "default-thumbnail.jpg"} // Use the correct field for the thumbnail
                alt={`Story ${index + 1}`}
              />
              <p>{story.caption || "No caption available"}</p>{" "}
              {/* Adjusted field */}
            </div>
          ))
        ) : (
          <p>No stories available for this category.</p>
        )}
      </div>

      <div className="Highlight"></div>
    </div>
  );
};

export default Highlight;
