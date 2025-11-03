import React from 'react';

const StoryItem = ({ id, image, timestamp }) => {
 
  const handleStoryClick = () => {
    alert('Visualizando história');
  };

  return (
    <div key={id} className="flex-shrink-0">
      <button
        onClick={handleStoryClick}
        className="flex flex-col items-center gap-2 group"
      >
        <div className="w-20 h-20 rounded-full p-0.5 bg-gradient-to-br from-purple-500 to-pink-500 shadow-md hover:shadow-lg transition-all transform hover:scale-105">
          <div className="w-full h-full rounded-full border-4 border-white overflow-hidden bg-gray-100">
            <img
              src={image}
              alt="Story"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <span className="text-xs text-gray-600">
          {timestamp}
        </span>
      </button>
    </div>
  );
};

export default StoryItem;
