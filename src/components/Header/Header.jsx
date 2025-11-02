import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="bg-white shadowsm border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Stories
        </h1>
      </div>
    </div>
  );
};

export default Header;
