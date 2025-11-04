import { useState, useEffect } from 'react';

const useStories = () => {
  const [stories, setStories] = useState(() => {
    try {
      const storedStories = sessionStorage.getItem('stories');
      return storedStories ? JSON.parse(storedStories) : [];
    } catch (error) {
      console.error("Erro ao carregar stories do sessionStorage:", error);
      return [];
    }
  });

  useEffect(() => {
    try {
      sessionStorage.setItem('stories', JSON.stringify(stories));
    } catch (error) {
      console.error("Erro ao salvar stories no sessionStorage:", error);
    }
  }, [stories]);

  return [stories, setStories];
};

export default useStories;
