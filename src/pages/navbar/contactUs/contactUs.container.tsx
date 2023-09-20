import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useCreateReducer } from 'hooks/useCreateReducer';
import { useTranslations } from 'hooks/useTranslations';
import { toast } from 'react-toastify';
import { v1 as uuidv1 } from 'uuid';
import ContactUs from './contactUs';
import { ContactUsStateProps, initialState } from './contactUs.state';
import { ContactUsRequest } from './interfaces/contactUsRequest';
import { contactUsSchema } from './validations/contactUsSchema';

const ContactUsContainer = () => {
  const {
    state: {
      name,
      email,
      message,
      isLoading
    },
    dispatch,
  } = useCreateReducer<ContactUsStateProps>({
    initialState,
  });

  const translations = useTranslations();

  const notify = () => {
    toast.success('The message has been sent!', {
      toastId: uuidv1(),
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm<ContactUsRequest>({
    resolver: yupResolver(contactUsSchema),
  });

  const handleOnSubmit = (body: ContactUsRequest) => {
    dispatch({ type: 'change', field: 'isLoading', value: true });
  };

  const onSubmit = () => handleSubmit(handleOnSubmit);

  return (
    <ContactUs
      isLoading={isLoading}
      register={register}
      onSubmit={onSubmit}
    />
  );
};

export default ContactUsContainer;
