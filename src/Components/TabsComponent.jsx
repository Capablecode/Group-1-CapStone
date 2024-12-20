import React from "react";
import "../Styles/Tabs.css";
import { usePost } from "../hook/usePost";
import { useReels } from "../hook/useReels";
import publication from "../assets/post.png";
import reel from "../assets/reels.png";
import tag from "../assets/tag.png";

function App() {
  const [activeTab, setActiveTab] = React.useState("stories");
  const { posts, isPostsLoading, postsError } = usePost();
  const { reels, isReelsLoading, reelsError } = useReels();

  const getImageUrl = (item) => {
    if (item.image_versions?.items?.[0]?.url) {
      return item.image_versions.items[0].url;
    }
    if (item.image_versions2?.candidates?.[0]?.url) {
      return item.image_versions2.candidates[0].url;
    }
    return item.thumbnail_url || "";
  };

  const getIndicatorPosition = () => {
    switch (activeTab) {
      case "stories":
        return "0%";
      case "posts":
        return "33.33%";
      case "reels":
        return "66.66%";
      default:
        return "0%";
    }
  };

  return (
    <div className="instagram-container">
      <div className="tabs-container">
        <div className="tabs">
          <div
            className={`tab ${activeTab === "stories" ? "active" : ""}`}
            onClick={() => setActiveTab("stories")}
          >
            <img src={publication} alt="stories" />
            PUBLICATION
          </div>
          <div
            className={`tab ${activeTab === "posts" ? "active" : ""}`}
            onClick={() => setActiveTab("posts")}
          >
            <img src={reel} alt="posts" />
            REELS
          </div>
          <div
            className={`tab ${activeTab === "reels" ? "active" : ""}`}
            onClick={() => setActiveTab("reels")}
          >
            <img src={tag} alt="reels" />
            MARKS
          </div>
        </div>
        <div className="active-line" style={{ left: getIndicatorPosition() }} />
      </div>

      <div className="content">
        {activeTab === "stories" && (
          <div>
            {isPostsLoading ? (
              <p>Loading posts...</p>
            ) : postsError ? (
              <p>Error: {postsError}</p>
            ) : (
              <div className="image-grid">
                {posts.map((item) => (
                  <div key={item.id} className="image-item">
                    <img src={getImageUrl(item)} alt={item.code} />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === "posts" && (
          <div>
            {isReelsLoading ? (
              <p>Loading reels...</p>
            ) : reelsError ? (
              <p>Error: {reelsError}</p>
            ) : (
              <div className="image-grid">
                {reels.map((item) => (
                  <div key={item.id} className="image-item">
                    <img src={getImageUrl(item)} alt={item.code} />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === "reels" && (
          <div className="image-grid">
            {/* Add logic for "reels" tab if needed */}
            <p>No data for Marks yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
