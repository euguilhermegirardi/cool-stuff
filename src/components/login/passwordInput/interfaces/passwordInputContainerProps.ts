import { UseFormRegister } from 'react-hook-form';

export interface PasswordInputContainerProps {
  inputId: string;
  inputName: string;
  autoFocus: boolean;
  formErrors?: {
    message?: string;
  };
  register: UseFormRegister<any>;
  validateInput?: () => void;
};
