import { storageManager } from '@/utils/storageManager';
import { STORY_EXPIRATION_TIME } from '@/utils/constants';

export const storyService = {
  getAllStories: () => {
    return storageManager.getStories();
  },

  addStory: (imageBase64) => {
    const stories = storageManager.getStories();
    const newStory = {
      id: Date.now(),
      image: imageBase64,
      timestamp: Date.now()
    };

    const updatedStories = [...stories, newStory];
    storageManager.saveStories(updatedStories);
    return newStory;
  },

  removeExpiredStories: () => {
    const stories = storageManager.getStories();
    const now = Date.now();

    const validStories = stories.filter(story => {
      const expiresAt = story.timestamp + STORY_EXPIRATION_TIME;
      return now < expiresAt;
    });

    return stories;
  },

  isStoryExpired: (timestamp) => {
    const expiresAt = timestamp + STORY_EXPIRATION_TIME;
    return Date.now() >= expiresAt;
  }
};
