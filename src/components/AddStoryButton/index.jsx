import React from 'react';
import { Plus } from 'lucide-react';
import { useImageUpload } from '@/hooks/useImageUpload';
import { useStoryContext } from '@/context/StoryContext/useStoryContext';
import './index.css';

const AddStoryButton = () => {
  const { addStory } = useStoryContext();
  const { fileInputRef, handleFileSelect, triggerFileInput } = useImageUpload(addStory);

  return (
    <div className="add-story-item">
      <button onClick={triggerFileInput} className="add-story-button">
        <div className="add-story-avatar">
          <Plus className="add-story-icon" />
        </div>
        <span className="add-story-label">Add Story</span>
      </button>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        className="add-story-input"
      />
    </div>
  );
};

export default AddStoryButton;
