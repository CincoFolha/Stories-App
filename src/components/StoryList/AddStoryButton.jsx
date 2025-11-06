import React from 'react';
import { Plus } from 'lucide-react';
import useImageUpload from '@/hooks/useImageUpload.js';

const AddStoryButton = ({ onClick }) => {
  const { 
    fileInputRef, 
    handleFileSelection, 
    triggerFileInputClick 
  } = useImageUpload(onClick);

  return (
    <div className="flex-shrink-0">
      <button
        onClick={triggerFileInputClick}
        className="flex flex-col items-center gap-2 group"
      >
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center">
          <Plus className="w-8 h-8 text-white" />
        </div>
        <span className="text-sm font-medium text-gray-700">Add Story</span>
      </button>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileSelection}
        className="hidden"
      />
    </div>
  );
};

export default AddStoryButton;
