import { useContext } from 'react';
import { StoryContext } from '@/context/StoryContext/StoryContext.jsx';

export const useStoryContext = () => {
  const context = useContext(StoryContext);
  
  if (!context) {
    throw new Error('useStoryContext must be used inside <StoryProvider>');
  }
  
  return context;
};
