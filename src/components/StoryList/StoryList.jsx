import React from 'react';
import AddStoryButton from './AddStoryButton.jsx';

const StoryList = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
        <AddStoryButton />
      </div>
    </div>
  );
};

export default StoryList;
