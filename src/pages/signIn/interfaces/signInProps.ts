import { FormEventHandler } from 'react';
import { UseFormRegister } from 'react-hook-form';
import LoginRequest from './loginRequest';

export interface SignInProps {
  defaultValue: string | null;
  formErrors: {
    email?: {
      message?: string;
    };
    password?: {
      message?: string;
    };
  };
  register: UseFormRegister<LoginRequest>;
  handleRememberMe: () => void;
  onSubmit: () => FormEventHandler<HTMLFormElement> | undefined;
};
