import { FormEventHandler } from 'react';
import { UseFormRegister } from 'react-hook-form';
import SignUpRequest from './signUpRequest';

export interface SignUpProps {
  passwordDoNotMatch: boolean;
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
  validateInput: () => void;
  onSubmit: () => FormEventHandler<HTMLFormElement> | undefined;
};
