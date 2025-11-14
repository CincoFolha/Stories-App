import React from 'react';
import Header from '@/components/Header';
import StoryList from '@/components/StoryList';
import StoryViewer from '@/components/StoryViewer';
import { StoryProvider } from '@/context/StoryContext/StoryContext.jsx';
import '@/App.css'

const StoriesApp = () => {
  return (
    <StoryProvider>
      <div className="app-root">
        <Header />
        <main className="app-main">
          <StoryList />
          <StoryViewer />
        </main>
      </div>
    </StoryProvider>
  );
};

export default StoriesApp;
