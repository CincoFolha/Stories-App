import { useContext } from 'react';
import StoryContext from './StoryContext.jsx';

const useStoryContext = () => {
  const context = useContext(StoryContext);
  
  if (!context) {
    throw new Error('useStoryContext must be used inside <StoryProvider>');
  }
  
  return context;
}

export default useStoryContext;
