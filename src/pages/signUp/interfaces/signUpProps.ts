import { FormEventHandler } from 'react';
import { UseFormRegister } from 'react-hook-form';
import SignUpRequest from './signUpRequest';

export interface SignUpProps {
  isLoading: boolean;
  formErrors: {
    email?: {
      message?: string;
    };
    password?: {
      message?: string;
    };
    confirmPassword?: {
      message?: string;
    };
  };
  register: UseFormRegister<SignUpRequest>;
  onSubmit: () => FormEventHandler<HTMLFormElement> | undefined;
};
