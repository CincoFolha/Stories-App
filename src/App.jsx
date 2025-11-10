import React from 'react';
import Header from '@/components/Header';
import StoryList from '@/components/StoryList';
import StoryViewer from '@/components/StoryViewer';
import { StoryProvider } from '@/context/StoryContext/StoryContext.jsx';
import '@/App.css'

const StoriesApp = () => {
  return (
    <StoryProvider>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
        <Header />
        <StoryList />
        <StoryViewer />
      </div>
    </StoryProvider>
  );
};

export default StoriesApp;
