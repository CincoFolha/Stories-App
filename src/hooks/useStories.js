import { useState, useEffect, useCallback } from 'react';
import storageManager from '@/utils/storageManager.js';

const STORAGE_KEY = 'stories';

const useStories = () => {
  const [stories, setStories] = useState(() => {
    return storageManager.getItem(STORAGE_KEY, []);
  });

  useEffect(() => {
    storageManager.setItem(STORAGE_KEY, stories);
  }, [stories]);

  const addStory = useCallback((newStory) => {
    setStories(prevStories => [...prevStories, newStory]);
  }, []);

  return [stories, addStory];
};

export default useStories;
