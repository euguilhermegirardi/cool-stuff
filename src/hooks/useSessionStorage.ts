import { useState } from 'react';
import { sessionStorageService } from '../services/sessionStorage.service';

function useSessionStorage(key: string, defaultValue: string) {
  const [storedValue, setStoredValue] = useState(() => {
    const item = sessionStorageService.get(key);

    if (item === '') {
      return defaultValue;
    } else {
      return item;
    };
  });

  const setValue = (value: string) => {
    sessionStorageService.set(key, value);
    setStoredValue(value)
  };

  return [storedValue, setValue] as const;
};

export default useSessionStorage;
