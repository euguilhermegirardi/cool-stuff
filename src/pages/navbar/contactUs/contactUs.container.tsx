import { lazy, Suspense } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import FullPageLoading from 'components/fullPageLoading/fullPageLoading';
import { useCreateReducer } from 'hooks/useCreateReducer';
import { useFetch } from 'hooks/useFetch';
import { toast } from 'react-toastify';
import { FullLoadingPageWrapper } from 'shared/css/fullPageLoadingWrapper';
import ApplicationRoutes from 'utils/navigation/applicationRoutes';
import { v1 as uuidv1 } from 'uuid';
import { ContactUsStateProps, initialState } from './contactUs.state';
import { ContactUsRequest } from './interfaces/contactUsRequest';
import { contactUsSchema } from './validations/contactUsSchema';

const ContactUs = lazy(() => import('./contactUs'));

const ContactUsContainer = () => {
  const {
    state: {
      isLoading
    },
    dispatch,
  } = useCreateReducer<ContactUsStateProps>({
    initialState,
  });

  const fetchService = useFetch();
  const navigate = useNavigate();

  const notify = (error?: any) => {
    if (error) {
      toast.error('Something went wrong: error', {
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

    return fetchService.post('contact-us', {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        name,
        email,
        message
      }),
    })
      .then(() => {
        notify();
      })
      .catch((error) => {
        notify(error);
      })
      .finally(() => {
        dispatch({ type: 'change', field: 'isLoading', value: false });
        navigate(ApplicationRoutes.dashboard);
      });
  };

  const onSubmit = () => handleSubmit(handleOnSubmit);

  return (
    <Suspense
      fallback={
        <FullLoadingPageWrapper>
          <FullPageLoading />
        </FullLoadingPageWrapper>
      }
    >
      <ContactUs
        isLoading={isLoading}
        register={register}
        formErrors={formErrors}
        onSubmit={onSubmit}
      />
    </Suspense>
  );
};

export default ContactUsContainer;
