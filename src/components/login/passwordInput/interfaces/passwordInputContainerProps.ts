import { UseFormRegister } from 'react-hook-form';

export interface PasswordInputContainerProps {
  inputId: string;
  inputName: string;
  formErrors?: {
    message?: string;
  };
  register: UseFormRegister<any>;
};
