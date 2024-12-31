import axios from "axios";
import { useState, useEffect } from "react";

export function useMarks() {
  const [marks, setMarks] = useState([]);
  const [isMarksLoading, setIsMarksLoading] = useState(true);
  const [marksError, setMarksError] = useState(null);

  useEffect(() => {
    const fetchMarks = async () => {
      const options = {
        method: "GET",
        url: "https://instagram-scraper-api2.p.rapidapi.com/v1/tagged",
        params: {
          username_or_id_or_url: "mrbeast",
          url_embed_safe: true,
        },
        headers: {
          "x-rapidapi-key":
            "498057f6b2mshe747f7e8a7af6fap15d0afjsnbfd48d4e9cdd",
          "x-rapidapi-host": "instagram-scraper-api2.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        console.log(response.data.data.items);

        console.log(response.data.data.items);
        setMarks(response.data.data.items || []);
        setMarksError(null);
      } catch (error) {
        setMarksError("Failed to fetch reels");
        setMarks([]);
        console.error(error);
      } finally {
        setIsMarksLoading(false);
      }
    };
    fetchMarks();
  }, []);
  return { marks, isMarksLoading, marksError };
}
