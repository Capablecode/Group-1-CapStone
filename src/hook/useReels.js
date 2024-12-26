import axios from "axios";
import { useState, useEffect } from "react";

export function useReels() {
  const [reels, setReels] = useState([]);
  const [isReelsLoading, setIsReelsLoading] = useState(true);
  const [reelsError, setReelsError] = useState(null);

  useEffect(() => {
    const fetchReels = async () => {
      const options = {
        method: "GET",
        url: "https://instagram-scraper-api2.p.rapidapi.com/v1.2/reels",
        params: {
          username_or_id_or_url: "mrbeast",
        },
        headers: {
          "x-rapidapi-key":
            "498057f6b2mshe747f7e8a7af6fap15d0afjsnbfd48d4e9cdd",
          "x-rapidapi-host": "instagram-scraper-api2.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);
      } catch (error) {
        setReelsError("Failed to fetch reels");
        setReels([]);
        console.error(error);
      } finally {
        setIsReelsLoading(false);
      }
    };
    fetchReels();
  }, []);
  return { reels, isReelsLoading, reelsError };
}
