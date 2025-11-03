import React from 'react';
import Header from './components/Header';
import StoryList from './components/StoryList';
import './App.css'

const StoriesApp = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <Header />
      <StoryList />
    </div>
  );
};

export default StoriesApp;
