import { useRef, useState, useEffect } from "react";
import "../Styles/Tabs.css";
import { usePost } from "../hook/usePost";
import { useReels } from "../hook/useReels";
import { useMarks } from "../hook/useMarks";
import publication from "../assets/post.svg";
import reel from "../assets/reels.svg";
import tag from "../assets/Tag.svg";

function App() {
  const [activeTab, setActiveTab] = useState("publication");
  const [lineStyle, setLineStyle] = useState({ width: "0", left: "0" });
  const tabRefs = {
    publication: useRef(null),
    reels: useRef(null),
    marks: useRef(null),
  };

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

  useEffect(() => {
    const activeTabRef = tabRefs[activeTab].current;
    if (activeTabRef) {
      const { offsetWidth, offsetLeft } = activeTabRef;
      setLineStyle({ width: `${offsetWidth}px`, left: `${offsetLeft}px` });
    }
  }, [activeTab]); // Add `activeTab` as a dependency
  return (
    <div className="instagram-container">
      <div className="tabs-container">
        <div className="tabs">
          <div
            ref={tabRefs.publication}
            className={`tab ${activeTab === "publication" ? "active" : ""}`}
            onClick={() => setActiveTab("publication")}
            role="tab"
            aria-selected={activeTab === "publication"}
          >
            <img src={publication} alt="publication" className="icond" />
            PUBLICATION
          </div>
          <div
            ref={tabRefs.reels}
            className={`tab ${activeTab === "reels" ? "active" : ""}`}
            onClick={() => setActiveTab("reels")}
            role="tab"
            aria-selected={activeTab === "reels"}
          >
            <img src={reel} alt="reels" className="icond" />
            REELS
          </div>
          <div
            ref={tabRefs.marks}
            className={`tab ${activeTab === "marks" ? "active" : ""}`}
            onClick={() => setActiveTab("marks")}
            role="tab"
            aria-selected={activeTab === "marks"}
          >
            <img src={tag} alt="marks" className="icond" />
            MARKS
          </div>
        </div>
        <div className="active-line" style={lineStyle} />
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
              <div className="video-grid">
                {reels.map((item) => (
                  <div key={item.id} className="video-item">
                    <video
                      src={item.video_url}
                      controls
                      preload="metadata"
                      width="100%"
                      height="auto"
                    >
                      Your browser does not support the video tag.
                    </video>
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
