import axios from "axios";
import { useState, useEffect } from "react";

export function usePost() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const options = {
        method: "GET",
        url: "https://instagram-scraper-api2.p.rapidapi.com/v1.2/posts",
        params: {
          username_or_id_or_url: "mrbeast",
          url_embed_safe: true,
        },
        headers: {
          "x-rapidapi-key":
            "ac7fda31efmsh14ce044bd25514fp14533ajsn9f5b3b7f7084",
          "x-rapidapi-host": "instagram-scraper-api2.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        console.log(response.data.data.items);
        setPosts(response.data.data.items || []);
        setError(null);
        // let data = response.data.map((data) => console.log(response.data.data));
      } catch (error) {
        setError("Failed to fetch posts");
        setPosts([]);
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, []);
  return { posts, isLoading, error };
}
