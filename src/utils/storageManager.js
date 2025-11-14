import { STORAGE_KEY } from '@/utils/constants';

export const storageManager = {
    
  getStories: () => {
    try {
      const stored = sessionStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Error loading stories:', error);
      return [];
    }
  },

  saveStories: (stories) => {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(stories));
      return true;
    } catch (error) {
      console.error('Error saving stories:', error);
      return false;
    }
  },

  clearStories: () => {
    try {
      sessionStorage.removeItem(STORAGE_KEY);
      return true;
    } catch (error) {
      console.error('Error clearing stories:', error);
      return false;
    }
  }
};
