import { useState, useEffect, useCallback } from 'react';
import storageManager from '@/utils/storageManager.js';
import { EXPIRATION_TIME } from '@/utils/constants.js';

const STORAGE_KEY = 'stories';
const CHECK_INTERVAL_MS = 60000;

const useStories = () => {
  const [stories, setStories] = useState(() => {
    return storageManager.getItem(STORAGE_KEY, []);
  });

  const isNotExpired = useCallback(
    (story) => Date.now() < story.timestamp + EXPIRATION_TIME,
    []
  );
  
  const removeExpiredStories = useCallback(() => {
    setStories(prevStories => {
      const filtered = prevStories.filter(isNotExpired);
      return filtered.length === prevstories.length ? prevStories : filtered;
    });
  }, [isNotExpired]);

  useEffect(() => {
    const interval = setInterval(removeExpiredStories, CHECK_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [removeExpiredStories]);

  useEffect(() => {
    storageManager.setItem(STORAGE_KEY, stories);
  }, [stories]);

  const addStory = useCallback((newStory) => {
    setStories(prevStories => [...prevStories, newStory]);
  }, []);

  return [stories, addStory];
};

export default useStories;
