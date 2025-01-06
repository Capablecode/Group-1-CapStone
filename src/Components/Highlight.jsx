import axios from "axios";
import { useState } from "react";
import "../Styles/Highlight.css";

const Highlight = () => {
  const [stories, setStories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(false); // Added loading state
  const categories = ["Templates", "Reviews", "Mentions", "Tips", "Blog"];

  const fetchStories = async (category) => {
    setLoading(true); // Set loading to true when fetching starts
    try {
      const options = {
        method: "GET",
        url: "https://instagram-scraper-api2.p.rapidapi.com/v1/highlight_info",
        params: { highlight_id: "17907964880010937" }, // Ensure this ID is correct
        headers: {
          "X-RapidAPI-Key": "a3e7b81b-aa7d-4ef8-8cd4-9938195a1f3e",
          "X-RapidAPI-Host": "instagram-scraper-api2.p.rapidapi.com",
        },
      };

      console.log("Fetching stories for category:", category);
      const response = await axios.request(options);
      console.log("API response:", response.data);

      // Update stories based on API response
      setStories(response.data.items || []);
      setSelectedCategory(category);
    } catch (error) {
      console.error(
        "Error fetching data:",
        error.response?.data || error.message || "Unknown error"
      );
    } finally {
      setLoading(false); // Stop loading when the request completes
    }
  };

  return (
    <div className="app">
      {/* Circular category container */}
      <div className="circular-container">
        {categories.map((category) => (
          <div
            key={category} // Use category name as key
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
        {loading ? ( // Show loading spinner if fetching stories
          <p>Loading stories...</p>
        ) : selectedCategory ? (
          <>
            <h2>{selectedCategory} Stories</h2>
            {stories.length > 0 ? (
              stories.map((story, index) => (
                <div key={index} className="story">
                  <img
                    src={story.media_url || "default-thumbnail.jpg"} // Use fallback thumbnail
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
