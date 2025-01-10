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
        // console.log(response.data.data.items);

        // Filter only videos from the fetched data
        const videoReels = (response.data.data.items || []).filter(
          (item) => item.media_type === 2 // Assuming media_type 2 indicates videos
        );

        setReels(videoReels);
        setReelsError(null);
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
