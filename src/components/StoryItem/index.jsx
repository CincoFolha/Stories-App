import React from 'react';
import { timeFormatter } from '@/utils/timeFormatter';
import './index.css';

const StoryItem = ({ story, onClick }) => {
  return (
    <div className="story-item">
      <button onClick={onClick} className="story-button">
        <div className="story-avatar">
          <div className="story-image-wrapper">
            <img
              src={story.image}
              alt="Story"
              className="story-image"
            />
          </div>
        </div>
        <span className="story-time">
          {timeFormatter(story.timestamp)}
        </span>
      </button>
    </div>
  );
};

export default StoryItem;
