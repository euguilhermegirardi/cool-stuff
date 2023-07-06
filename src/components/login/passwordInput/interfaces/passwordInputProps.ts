import { UseFormRegister } from 'react-hook-form';

export interface PasswordInputProps {
  autoFocus: boolean;
  register: UseFormRegister<any>;
  formErrors?: {
    message?: string;
  };
  showPassword: boolean;
  handleShowPassword: () => void;
  handleMouseDownPassword: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  inputId: string;
};
