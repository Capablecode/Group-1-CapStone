import "../Styles/Stories.css"; // Make sure to include CSS for styling
import story_1 from "../assets/story_1.webp";
import story_2 from "../assets/story_2.webp";
import story_3 from "../assets/story_3.webp";
import story_4 from "../assets/story_4.webp";
import story_5 from "../assets/story_5.webp";
const Stories = () => {
  const storyData = [
    {
      id: 1,
      src: story_1,
      caption: "Templates",
    },
    {
      id: 2,
      src: story_2,
      caption: "Reviews",
    },
    {
      id: 3,
      src: story_3,
      caption: "Mentions",
    },
    {
      id: 4,
      src: story_4,
      caption: "Tips",
    },
    {
      id: 5,
      src: story_5,
      caption: "Blog",
    },
  ];

  return (
    <div className="story-row">
      {storyData.map((story) => (
        <div className="story-container" key={story.id}>
          <div className="story-circle">
            <img src={story.src} alt={story.caption} className="story-image" />
          </div>
          <p className="story-caption">{story.caption}</p>
        </div>
      ))}
    </div>
  );
};

export default Stories;
