import { useContext } from 'react';
import TranslationsContext from '../context/translations.context';

export const useTranslations = () => {
  return useContext(TranslationsContext);
};
