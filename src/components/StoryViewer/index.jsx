import React from 'react';
import { X } from 'lucide-react';
import { useStoryContext } from '@/context/StoryContext/useStoryContext';
import { useSwipeGesture } from '@/hooks/useSwipeGesture';
import ProgressBar from '@/components/ProgressBar';
import StoryContent from '@/components/StoryViewer/StoryContent';
import StoryNavigation from '@/components/StoryViewer/StoryNavigation';
import './index.css';

const StoryViewer = () => {
  const { viewingStory, stories, currentIndex, closeStory, navigateStory } = useStoryContext();
  
  const { handleTouchStart, handleTouchMove, handleTouchEnd } = useSwipeGesture(
    () => navigateStory(1), // swipe left
    () => navigateStory(-1)
  );

  if (!viewingStory) return null;

  return (
    <div className="story-viewer-overlay">
      <button onClick={closeStory} className="story-viewer-close" aria-label="Fechar Story">
        <X className="story-viewer-close-icon" />
      </button>
      
      <ProgressBar totalStories={stories.length} currentIndex={currentIndex} />

      <StoryNavigation 
        story={viewingStory} 
        currentIndex={currentIndex}
        totalStories={stories.length}
        onNavigate={navigateStory}
      />
       
      <StoryContent 
        story={viewingStory}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      />
    </div>
  );
};

export default StoryViewer;
