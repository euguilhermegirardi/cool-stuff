import { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ErrorFallbackComponent } from 'components/errorFallbackComponent/errorFallbackComponent';
import useAuth from 'hooks/useAuth';
import { useCreateReducer } from 'hooks/useCreateReducer';
import { useFetch } from 'hooks/useFetch';
import { useTranslations } from 'hooks/useTranslations';
import { withErrorBoundary } from 'react-error-boundary';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v1 as uuidv1 } from 'uuid';
import LoginRequest from './interfaces/loginRequest';
import UsersListResponse from './interfaces/usersListResponse';
import SignIn from './signIn';
import { initialState, SignInInitialStateProps } from './signIn.state';
import { loginSchema } from './validations/loginSchema';

const SignInContainer = withErrorBoundary(() => {
  const {
    state: {
      users,
      isLoading,
      notSignedIn
    },
    dispatch,
  } = useCreateReducer<SignInInitialStateProps>({
    initialState,
  });

  const fetchService = useFetch();
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
    dispatch({ type: 'change', field: 'isLoading', value: true });

    setTimeout(() => {
      if (users?.length && (body.email && body.password)) {
        users.forEach((user: any) => {
          if (user.userEmail === body.email && user.userPassword === body.password) {
            dispatch({ type: 'change', field: 'notSignedIn', value: false });
            dispatch({ type: 'change', field: 'isLoading', value: false });
            login();
          } else {
            dispatch({ type: 'change', field: 'isLoading', value: false });
            dispatch({ type: 'change', field: 'notSignedIn', value: true });
          }
        });
      }
    }, 2000);
  };

  const onSubmit = () => handleSubmit(handleOnSubmit);

  const handleGetUsers = useCallback(() => {
    return fetchService.get<UsersListResponse[]>('users')
      .then((response: UsersListResponse[]) => {
        dispatch({ type: 'change', field: 'users', value: response });
      })
      .catch(() => {
        notify();
      });
  }, [fetchService]);

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

