import axios from "axios";
import { useState } from "react";
import "../Styles/Highlight.css";
import { API_KEY } from "../data";

const Highlight = () => {
  const [stories, setStories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // Error state
  const categories = ["Templates", "Reviews", "Mentions", "Tips", "Blog"];

  const fetchStories = async (category) => {
    setLoading(true);
    setError(null); // Reset error state
    try {
      const options = {
        url: "https://instagram-scraper-api2.p.rapidapi.com/v1/highlights",
        params: {
          username_or_id_or_url: "mrbeast",
          url_embed_safe: true,
        },
        headers: {
          "X-RapidAPI-Key": API_KEY,
          "X-RapidAPI-Host": "instagram-scraper-api2.p.rapidapi.com",
        },
      };

      const response = await axios.get(options.url, {
        params: options.params,
        headers: options.headers,
      });
     
     
      const result = response?.data?.data?.items;

      setStories(result || []);
      console.log(result);

      setSelectedCategory(category);
    } catch (error) {
      console.error(
        "Error fetching data:",
        error.response?.data || error.message || "Unknown error"
      );
      setError("Failed to fetch stories. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      {/* Circular category container */}
      <div className="circular-container">
        {categories.map((category) => (
          <div
            key={category}
            className="circle-container"
            onClick={() => fetchStories(category)}
          >
            <div
              className={`circle ${category.length % 2 === 0 ? "red" : "blue"}`}
            >
              <div className="heart">❤</div>
            </div>
            <p className="circle-text">{category}</p>
          </div>
        ))}
      </div>

      {/* Stories Section */}
      <div className="stories">
        {error && <p className="error">{error}</p>} {/* Display error if any */}
        {loading ? (
          <p>Loading stories...</p>
        ) : selectedCategory ? (
          <>
            <h2>{selectedCategory} Stories</h2>
            {stories.length > 0 ? (
              stories.map((story, index) => (
                <div key={index} className="story">
                  <img
                    src={story.user.profile_pic_url  || "default-thumbnail.jpg"}
                    alt={`Story ${index + 1}`}
                  />
                  <p>{story.caption || "No caption available"}</p>
                </div>
              ))
            ) : (
              <p>No stories available for this category.</p>
            )}
          </>
        ) : (
          <p>Please select a category to view stories.</p>
        )}
      </div>
    </div>
  );
};

export default Highlight;
