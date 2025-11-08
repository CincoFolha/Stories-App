import React from 'react';
import Header from '@/components/Header';
import StoryList from '@/components/StoryList';
import StoryViewer from '@/components/StoryViewer';
import useStories from '@/hooks/useStories.js';
import '@/App.css'

const StoriesApp = () => {
  const { stories, addStory, openStory } = useStories();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <Header />
      <StoryList stories={stories} addStory={addStory} openStory={openStory} />
      <StoryViewer />
    </div>
  );
};

export default StoriesApp;
