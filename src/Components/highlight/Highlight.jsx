import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Highlight.css';

const Highlight = () => {
  const [stories, setStories] = useState([]); // All fetched stories
  const [filteredStories, setFilteredStories] = useState([]); // Stories filtered by category
  const [selectedCategory, setSelectedCategory] = useState(''); // Currently selected category
  const categories = ["Templates", "Reviews", "Mentions", "Tips", "Blog"]; // Custom categories

  // Fetch all highlights
  const fetchAllHighlights = async () => {
    try {
      const options = {
        method: 'GET',
        url: 'https://instagram-scraper-api2.p.rapidapi.com/v1/highlights',
        params: { username_or_id_or_url: 'mrbeast' }, // Query using username
        headers: {
          'x-rapidapi-key': 'a37f9e5443mshc3224cc1004de1cp14a6e8jsn5f3b42469e0f', // Your API key
          'x-rapidapi-host': 'instagram-scraper-api2.p.rapidapi.com',
        },
      };

      console.log('Fetching all highlights...');
      const response = await axios.request(options);

      // Extract highlight items
      const highlights = response.data.items || [];

      // Dynamically assign categories to highlights
      const categorizedHighlights = highlights.map((highlight, index) => ({
        ...highlight,
        category: categories[index % categories.length], // Assign categories cyclically
      }));

      setStories(categorizedHighlights);
    } catch (error) {
      console.error('Error fetching highlights:', error.response?.data || error.message);
    }
  };

  // Filter stories by category
  const filterStoriesByCategory = (category) => {
    const filtered = stories.filter((story) => story.category === category);
    setFilteredStories(filtered);
    setSelectedCategory(category);
  };

  useEffect(() => {
    fetchAllHighlights();
  }, []);

  return (
    <div className="app">
      <header className="header">
        <h1>Instagram Highlights</h1>
      </header>

      <div className="circular-container">
        {categories.map((category, index) => (
          <div
            key={index}
            className="circle-container"
            onClick={() => filterStoriesByCategory(category)}
          >
            <div className={`circle ${index % 2 === 0 ? 'red' : 'blue'}`}>
              <div className="heart">❤</div>
            </div>
            <p className="circle-text">{category}</p>
          </div>
        ))}
      </div>

      <div className="stories">
        {selectedCategory && <h2>{selectedCategory} Stories</h2>}
        {filteredStories.length > 0 ? (
          filteredStories.map((story, index) => (
            <div key={index} className="story">
              <img
                src={story.media_url || 'default-thumbnail.jpg'}
                alt={`Story ${index + 1}`}
              />
              <p>{story.caption || 'No caption available'}</p>
            </div>
          ))
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
};

export default Highlight;
