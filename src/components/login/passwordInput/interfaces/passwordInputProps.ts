import { UseFormRegister } from 'react-hook-form';

export interface PasswordInputProps {
  inputId: string;
  inputName: string;
  showPassword: boolean;
  formErrors?: {
    message?: string;
  };
  handleMouseDownPassword: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  register: UseFormRegister<any>;
  handleShowPassword: () => void;
};
