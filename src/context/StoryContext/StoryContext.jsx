import React, { createContext, useState } from 'react';
import { useStories } from '@/hooks/useStories.js';

export const StoryContext = createContext(null);

export const StoryProvider = ({ children }) => {
  const { stories, addStory, loadStories } = useStories();
  const [viewingStory, setViewingStory] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openStory = (index) => {
    setCurrentIndex(index);
    setViewingStory(stories[index]);
  };

  const closeStory = () => {
    setViewingStory(null);
  };

  const navigateStory = (direction) => {
    const newIndex = currentIndex + direction;
    
    if (newIndex >= 0 && newIndex < stories.length) {
      setCurrentIndex(newIndex);
      setViewingStory(stories[newIndex]);
    }
  };

  const value = {
    stories,
    addStory,
    loadStories,
    viewingStory,
    currentIndex,
    openStory,
    closeStory,
    navigateStory
  };

  return (
    <StoryContext.Provider value={value}>
      {children}
    </StoryContext.Provider>
  );
};
