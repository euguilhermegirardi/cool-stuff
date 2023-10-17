import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { ContactUsRequest } from './contactUsRequest';

export interface ContactUsProps {
  isLoading: boolean;
  register: UseFormRegister<ContactUsRequest>;
  formErrors: {
    name?: {
      message?: string;
    };
    email?: {
      message?: string;
    };
    message?: {
      message?: string;
    };
  };
  onSubmit: () => (e?: React.BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>;
};
