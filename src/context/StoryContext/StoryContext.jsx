import { createContext } from 'react';
import useStories from '@/hooks/useStories.js';

const StoryContext = createContext(null);
StoryContext.displayName = 'StoryContext';

export const StoryProvider = ({ children }) => {
  const storyState = useStories();

  return (
    <StoryContext.Provider value={storyState}>
      {children}
    </StoryContext.Provider>
  );
};

export default StoryContext;
