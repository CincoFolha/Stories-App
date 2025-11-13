import { MAX_WIDTH, MAX_HEIGHT } from './constants.js';

const readFileAsDataURL = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => resolve(e.target.result);
    reader.onerror = () => reject(new Error('Erro ao ler o arquivo.'));
    reader.readAsDataURL(file);
  });
};

const loadImageElement = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error('Erro ao carregar a image.'));
    img.src = src;
  });
};

const imageProcessor = async (file) => {
  try {
    const dataUrl = await readFileAsDataURL(file);

    let image; 
    try {
      image = await createImageBitmap(dataUrl);
    } catch {
      image = await loadImageElement(dataUrl);
    }

    let { width, height } = image;

    const scale = Math.min(MAX_WIDTH / width, MAX_HEIGHT / height, 1);
    width = Math.round(width * scale);
    height = Math.round(height * scale);

    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext('2d');
    ctx.drawImage(image, 0, 0, width, height);

    return canvas.toDataURL('image/jpeg', 0.9);
  
  } catch (error) {
    console.error('{imageProcessor} Falha no processamento da image:', error);
    throw new Error('Falha ao processar a imagem.');
  }
};

export default imageProcessor;
