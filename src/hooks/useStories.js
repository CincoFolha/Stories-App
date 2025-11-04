import { useState, useEffect } from 'react';

const useStories = () => {
  const [stories, setStories] = useState([]);

  return [stories, setStories];
};

export default useStories;
