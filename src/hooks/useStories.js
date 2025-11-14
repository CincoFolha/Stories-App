import { useState, useEffect } from 'react';
import { storyService } from '@/services/storyService';
import { EXPIRATION_CHECK_INTERVAL } from '@/utils/constants.js';

export const useStories = () => {
  const [stories, setStories] = useState([]);
  
  useEffect(() => {
    loadStories();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const validStories = storyService.removeExpiredStories();
      setStories(validStories);
    });

    return () => clearInterval(interval);
  }, []);

  const loadStories = () => {
    const loadedStories = storyService.getAllStories();
    const validStories = storyService.removeExpiredStories();
    setStories(validStories);
  };

  const addStory = (imageBase64) => {
    const newStory = storyService.addStory(imageBase64);
    setStories(prev => [...prev, newStory]);
  };

  return { stories, addStory, loadStories };
};
