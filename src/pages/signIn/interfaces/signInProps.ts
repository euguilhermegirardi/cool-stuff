import { FormEventHandler } from 'react';
import { UseFormRegister } from 'react-hook-form';
import LoginRequest from './loginRequest';

export interface SignInProps {
  isLoading: boolean;
  notSignedIn: boolean;
  formErrors: {
    email?: {
      message?: string;
    };
    password?: {
      message?: string;
    };
  };
  register: UseFormRegister<LoginRequest>;
  onSubmit: () => FormEventHandler<HTMLFormElement> | undefined;
};
