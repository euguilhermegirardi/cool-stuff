import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { ErrorFallbackComponent } from 'components/errorFallbackComponent/errorFallbackComponent';
import { useFetch } from 'hooks/useFetch';
import { useTranslations } from 'hooks/useTranslations';
import { withErrorBoundary } from 'react-error-boundary';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ApplicationRoutes from 'utils/navigation/applicationRoutes';
import { v1 as uuidv1 } from 'uuid';
import SignUpRequest from './interfaces/signUpRequest';
import SignUp from './signUp';
import validationSignUpSchema from './validations/validationSignUpSchema';

const SignUpContainer = withErrorBoundary(() => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchService = useFetch();
  const navigate = useNavigate();
  const translations = useTranslations();

  const notify = (error?: any) => {
    if (error) {
      toast.error(translations.somethingWentWrong, {
        toastId: uuidv1(),
      });
    } else {
      toast.success('Signed up!', {
        toastId: uuidv1(),
      });
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm<SignUpRequest>({
    resolver: yupResolver(validationSignUpSchema),
  });

  const handleOnSubmit = useCallback((data: SignUpRequest) => {
    setIsLoading(true);

    return fetchService.post('users', {
      body: {
        userEmail: data.email,
        userPassword: data.password,
      }
    })
      .then(() => {
        setIsLoading(false);
        navigate(ApplicationRoutes.signIn);
      })
      .catch((error) => {
        notify(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [fetchService]);

  const onSubmit = () => handleSubmit(handleOnSubmit);

  return (
    <SignUp
      isLoading={isLoading}
      formErrors={formErrors}
      register={register}
      onSubmit={onSubmit}
    />
  );
}, ErrorFallbackComponent);

export default SignUpContainer;
