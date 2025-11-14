import React from 'react';
import { StoryProvider } from '@/context/StoryContext/StoryContext';
import Header from '@/components/Header';
import StoryList from '@/components/StoryList';
import StoryViewer from '@/components/StoryViewer';
import '@/App.css'

const StoriesApp = () => {
  return (
    <StoryProvider>
      <div className="app-container">
        <Header />
        <StoryList />
        <StoryViewer />
      </div>
    </StoryProvider>
  );
};

export default StoriesApp;
