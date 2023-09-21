import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { ContactUsRequest } from './contactUsRequest';

export interface ContactUsProps {
  isLoading: boolean;
  register: UseFormRegister<ContactUsRequest>;
  formErrors: FieldErrors<ContactUsRequest>;
  onSubmit: () => (e?: React.BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>;
};
