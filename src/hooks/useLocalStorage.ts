import { useState } from 'react';
import { localStorageService } from 'services/localStorage.service';

function useLocalStorage(key: string, defaultValue: string) {
  const [storedValue, setStoredValue] = useState(() => {
    const item = localStorageService.get(key);

    if (item === '') {
      return defaultValue;
    } else {
      return item;
    };
  });

  const setValue = (value: string) => {
    localStorageService.set(key, value);
    setStoredValue(value)
  };

  return [storedValue, setValue] as const;
};

export default useLocalStorage;
