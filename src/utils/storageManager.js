
const storageManager = {
  setItem: (key, value) => {
    try {
      const serializedValue = JSON.stringify(value);
      sessionStorage.setItem(key, serializedValue);
    } catch (e) {
      console.error(
        'storageManager: Erro ao salvar a chave "${key}"', error);
    }
  },

  getItem: (key, defaultValue = null) => {
    try {
      const storedValue = sessionStorage.getItem(key);

      if (storedValue === null || storedValue == undefined) {
        return defaultValue;
      }

      try {
        return JSON.parse(storedValue);
      } catch (parseError) {
        console.warn(
          'storageManager: Falha ao fazer parse da chave "${key}"', 
          parseError);
        return defaultValue;
      }
    } catch (error) {
      console.error(
        'storageManager: Erro ao carregar a chave ${key}', error);
      return defaultValue;
    }
  },

  removeItem: (key) => {
    try {
      sessionStorage.removeItem(key);
    } catch (error) {
      console.error(
        'storageManager: Erro ao remover a chave "${key}"', error);
    }
  }
};

export default storageManager;
