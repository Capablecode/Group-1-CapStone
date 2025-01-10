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
            "8efdbf9cf4msh259a96f1712fcfbp1bcac8jsne2ad06904974",
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
