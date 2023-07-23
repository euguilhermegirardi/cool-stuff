function windowIsDefined() {
  return typeof window !== undefined;
}

export const sessionStorageService = {
  set: (key: string, value: string): void => {
    if (windowIsDefined()) {
      window.sessionStorage.setItem(key, value);
    }
  },
  get: (key: string): string | null => {
    if (windowIsDefined()) {
      const item = window.sessionStorage.getItem(key);

      if (item !== null) {
        return item;
      }
    }

    return '';
  },
};
