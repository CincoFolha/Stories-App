import React from 'react';
import AddStoryButton from '@/components/AddStoryButton';
import StoryItem from '@/components/StoryItem';
import { useStoryContext } from '@/context/StoryContext/useStoryContext';
import './index.css';

const StoryList = () => {
  const { stories, openStory } = useStoryContext();
 
  const hasStories = stories && stories.length > 0;

  return (
    <div className="story-list-container">
      <div className="story-list">        
        <AddStoryButton />

        {hasStories && stories.map((story, index) => (
            <StoryItem key={story.id} story={story} onClick={() => openStory(index)} />
        ))}

        {!hasStories && (
          <div className="no-stories">
            <p>
              No stories yet. Click the plus button to add your first story!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StoryList;
