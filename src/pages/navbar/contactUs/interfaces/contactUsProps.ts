import { UseFormRegister } from 'react-hook-form';
import { ContactUsRequest } from './contactUsRequest';

export interface ContactUsProps {
  isLoading: boolean;
  register: UseFormRegister<ContactUsRequest>;
  onSubmit: () => (e?: React.BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>;
};
