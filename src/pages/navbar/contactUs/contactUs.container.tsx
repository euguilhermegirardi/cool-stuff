import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useCreateReducer } from 'hooks/useCreateReducer';
import { useFetch } from 'hooks/useFetch';
import { useTranslations } from 'hooks/useTranslations';
import { toast } from 'react-toastify';
import ApplicationRoutes from 'utils/navigation/applicationRoutes';
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

  const fetchService = useFetch();
  const navigate = useNavigate();
  const translations = useTranslations();

  const notify = (error?: any) => {
    if (error) {
      toast.success('Something went wrong: error', {
        toastId: uuidv1(),
      });
    } else {
      toast.success('The message has been sent!', {
        toastId: uuidv1(),
      });
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm<ContactUsRequest>({
    resolver: yupResolver(contactUsSchema),
  });

  const encode = (data: any) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleOnSubmit = ({ name, email, message }: ContactUsRequest) => {
    dispatch({ type: 'change', field: 'isLoading', value: true });

    window.fetch("http://localhost:3000/contact-us", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message })
    })
      .then(() => {
        notify();
      })
      .catch((error) => {
        notify(error);
      })
      .finally(() => {
        dispatch({ type: 'change', field: 'isLoading', value: false });
        navigate(ApplicationRoutes.dashboard)
      });
  };

  const onSubmit = () => handleSubmit(handleOnSubmit);

  return (
    <ContactUs
      isLoading={isLoading}
      register={register}
      formErrors={formErrors}
      onSubmit={onSubmit}
    />
  );
};

export default ContactUsContainer;
