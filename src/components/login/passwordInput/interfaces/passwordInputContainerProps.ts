import { UseFormRegister } from 'react-hook-form';

export interface PasswordInputContainerProps {
  autoFocus: boolean;
  register: UseFormRegister<any>;
  formErrors?: {
    message?: string;
  };
  inputId: string;
  validateInput?: () => void;
};
