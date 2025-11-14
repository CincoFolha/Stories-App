import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './index.css';

const StoryNavigation = ({ currentIndex, totalStories, onNavigate }) => {
  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < totalStories - 1;

  return (
    <>
      {canGoPrev && (
        <button onClick={() => onNavigate(-1)} className="story-nav-button story-nav-prev">
          <ChevronLeft className="story-nav-icon" />
        </button>
      )}
      {canGoNext && (
        <button onClick={() => onNavigate(1)} className="story-nav-button story-nav-next">
          <ChevronRight className="story-nav-icon" />
        </button>
      )}
    </>
  );
};

export default StoryNavigation;
