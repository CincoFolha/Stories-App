import React from 'react';
import './index.css';

const ProgressBar = ({ totalStories, currentIndex }) => {
  return (
    <div className="progress-bar-container">
      {Array.from({ length: totalStories }).map((_, index) => (
        <div key={index} className="progress-bar-track">
          {index === currentIndex && (
            <div className="progress-bar-fill progress-bar-active"></div>
          )}
          {index < currentIndex && (
            <div className="progress-bar-fill"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
