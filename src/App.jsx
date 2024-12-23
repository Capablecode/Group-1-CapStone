
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [stories, setStories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const categories = ["Templates", "Reviews", "Mentions", "Tips", "Blog"];

  const fetchStories = async (category) => {
    try {
      const options = {
        method: 'GET',
        url: 'https://instagram-scraper-api2.p.rapidapi.com/v1/highlight_info',
        params: { highlight_id: '17907964880010937' },
        headers: {
          'X-RapidAPI-Key': 'a37f9e5443mshc3224cc1004de1cp14a6e8jsn5f3b42469e0f',
          'X-RapidAPI-Host': 'instagram-scraper-api2.p.rapidapi.com',
        },
      };

      const response = await axios.request(options);
      setStories(response.data.stories || []);
      setSelectedCategory(category);
    } catch (error) {
      console.error('Error fetching data:', error.response?.data || error.message);
    }
  };
import "./App.css"; // Import your styles here
import TabsComponent from "./Components/TabsComponent";


  return (
    
    <div className="app">
      <header className="header">
      </header>
      <div className="circular-container">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`circle-container`}
            onClick={() => fetchStories(category)}
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
        {stories.map((story, index) => (
          <div key={index} className="story">
            <img src={story.thumbnail} alt={`Story ${index + 1}`} />
            <p>{story.title}</p>
          </div>
        ))}
      </div>
    <div className="App">
      <TabsComponent />
    </div>
  );
};

export default App;
