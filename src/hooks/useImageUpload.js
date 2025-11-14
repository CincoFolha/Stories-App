import { useState, useRef } from 'react';
import { resizeImage } from '@/utils/imageProcessor.js';

export const useImageUpload = (onUpload) => {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);
 
  const handleFileSelect = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    setError(null);

    try {
      const base64 = await resizeImage(file);
      onUpload(base64);

      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch (error) {
      console.error('Erro ao processar imagem:', error);
      setError(error.message || 'Failed to process image');
      alert('Falha ao processar a imagem. Tente novamente.');
    } finally {
      setIsUploading(false);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return { 
    fileInputRef,
    isUploading,
    error,
    handleFileSelect, 
    triggerFileInput 
  };
};

