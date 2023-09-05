import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { ErrorFallbackComponent } from 'components/errorFallbackComponent/errorFallbackComponent';
import useAuth from 'hooks/useAuth';
import { useTranslations } from 'hooks/useTranslations';
import { withErrorBoundary } from 'react-error-boundary';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v1 as uuidv1 } from 'uuid';
import LoginRequest from './interfaces/loginRequest';
import SignIn from './signIn';
import { loginSchema } from './validations/loginSchema';

const SignInContainer = withErrorBoundary(() => {
  const [users, setUsers] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [notSignedIn, setNotSignedIn] = useState(false);

  const { login } = useAuth();
  const translations = useTranslations();

  const notify = () => {
    toast.error(translations.somethingWentWrong, {
      toastId: uuidv1()
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm<LoginRequest>({
    resolver: yupResolver(loginSchema),
  });

  const handleOnSubmit = (body: LoginRequest) => {
    setIsLoading(true);

    setTimeout(() => {
      if (users.length && (body.email && body.password)) {
        users.forEach((user: any) => {
          if (user.userEmail === body.email && user.userPassword === body.password) {
            setNotSignedIn(false);
            setIsLoading(false);
            login();
          } else {
            setIsLoading(false);
            setNotSignedIn(true);
          }
        });
      }
    }, 1500);
  };

  const onSubmit = () => handleSubmit(handleOnSubmit);

  const handleGetUsers = async () => {
    await axios.get('http://localhost:3000/users')
      .then((response) => {
        setUsers(response.data);
      })
      .catch(() => {
        notify();
      })
  };

  useEffect(() => {
    handleGetUsers();
  }, []);

  return (
    <SignIn
      isLoading={isLoading}
      notSignedIn={notSignedIn}
      formErrors={formErrors}
      register={register}
      onSubmit={onSubmit}
    />
  )
}, ErrorFallbackComponent);

export default SignInContainer;

