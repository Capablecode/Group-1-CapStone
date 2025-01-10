import axios from "axios";
import { useState } from "react";
import "../Styles/Highlight.css";

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
        url: "https://instagram-scraper-api2.p.rapidapi.com/v1/highlight_info",
        params: { highlight_id: "17907964880010937" },
        headers: {
          "X-RapidAPI-Key":
            "ac7fda31efmsh14ce044bd25514fp14533ajsn9f5b3b7f7084",
          "X-RapidAPI-Host": "instagram-scraper-api2.p.rapidapi.com",
        },
      };

      const response = await axios.get(options.url, {
        params: options.params,
        headers: options.headers,
      });
      
      const result = response.data.data.items
      
      
      setStories(result || []);
      console.log(setStories);
      
      setSelectedCategory(category);
    } catch (error) {
      console.error("Error fetching data:", error.response?.data || error.message || "Unknown error");
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
            <div className={`circle ${category.length % 2 === 0 ? "red" : "blue"}`}>
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
                    src={story.media_url || "default-thumbnail.jpg"}
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