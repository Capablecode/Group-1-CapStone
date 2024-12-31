import React from "react";
import "../Styles/Tabs.css"; // Custom CSS for styling
import { usePost } from "../hook/usePost"; // Custom hook for posts
import { useReels } from "../hook/useReels"; // Custom hook for reels
import { useMarks } from "../hook/useMarks"; // Custom hook for marks
import publication from "../assets/post.png"; // Icon for publication tab
import reel from "../assets/reels.png"; // Icon for reels tab
import tag from "../assets/Tag.png"; // Icon for marks tab

function App() {
  const [activeTab, setActiveTab] = React.useState("publication");
  const { posts = [], isPostsLoading, postsError } = usePost();
  const { reels = [], isReelsLoading, reelsError } = useReels();
  const { marks = [], isMarksLoading, marksError } = useMarks();

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
      case "publication":
        return "0%";
      case "reels":
        return "33.33%";
      case "marks":
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
            className={`tab ${activeTab === "publication" ? "active" : ""}`}
            onClick={() => setActiveTab("publication")}
            role="tab"
            aria-selected={activeTab === "publication"}
          >
            <img src={publication} alt="publication" />
            PUBLICATION
          </div>
          <div
            className={`tab ${activeTab === "reels" ? "active" : ""}`}
            onClick={() => setActiveTab("reels")}
            role="tab"
            aria-selected={activeTab === "reels"}
          >
            <img src={reel} alt="reels" />
            REELS
          </div>
          <div
            className={`tab ${activeTab === "marks" ? "active" : ""}`}
            onClick={() => setActiveTab("marks")}
            role="tab"
            aria-selected={activeTab === "marks"}
          >
            <img src={tag} alt="marks" />
            MARKS
          </div>
        </div>
        <div className="active-line" style={{ left: getIndicatorPosition() }} />
      </div>

      <div className="content">
        {activeTab === "publication" && (
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

        {activeTab === "reels" && (
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

        {activeTab === "marks" && (
          <div>
            {isMarksLoading ? (
              <p>Loading tags...</p>
            ) : marksError ? (
              <p>Error: {marksError}</p>
            ) : (
              <div className="image-grid">
                {marks.map((item) => (
                  <div key={item.id} className="image-item">
                    <img src={getImageUrl(item)} alt={item.code} />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
