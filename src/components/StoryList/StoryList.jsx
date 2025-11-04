import React from 'react';
import AddStoryButton from './AddStoryButton.jsx';
import StoryItem from './StoryItem.jsx';
import useStories from '../../hooks/useStories.js';

const StoryList = () => {
  const [stories, setStories] = useStories();
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
        <AddStoryButton />
        <StoryItem id={Date.now()} image={"../../assets/images/law-1.jpg"} timestamp={Date.now()}/>
        {stories.length === 0 && (
          <div className="flex-1 flex items-center justify-center py-12">
            <p className="text-gray-500 text-center">
              No stories yet. Click the plus button to add your first story!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StoryList;
