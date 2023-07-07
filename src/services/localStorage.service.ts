function windowIsDefined() {
  return typeof window !== undefined;
}

export const localStorageService = {
  set: (key: string, value: string): void => {
    if (windowIsDefined()) {
      window.localStorage.setItem(key, value);
    }
  },
  get: (key: string): string | null => {
    if (windowIsDefined()) {
      const item = window.localStorage.getItem(key);

      if (item !== null) {
        return item;
      }
    }

    return '';
  },
};
