import { useSwipeGesture } from '@/hooks/useSwipeGesture.js';
import { timeFormatter } from '@/utils/timeFormatter.js';
import './index.css';

const StoryContent = ({ story, onTouchStart, onTouchMove, onTouchEnd }) => {
  return (
    <div
      className="story-content"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <img src={story.image} alt="Story" className="story-image" />
      <div className="story-timestamp">
        <span className="story-timestamp-text">
          {timeFormatter(story.timestamp)}
        </span>
      </div>
    </div>
  );
};

export default StoryContent;
