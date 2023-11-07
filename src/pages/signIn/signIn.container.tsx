import { Grid } from '@mui/material';
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

  const notify = ({
    error,
    passwordIncorrect,
  }: {
    error?: any;
    passwordIncorrect?: boolean;
  }
  ) => {
    if (error) {
      toast.error(translations.somethingWentWrong, {
        toastId: uuidv1(),
      });
    } else {
      toast.success('Logged in!', {
        toastId: uuidv1(),
      });
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm<LoginRequest>({
    resolver: yupResolver(loginSchema),
  });

  const handleOnSubmit = async (body: LoginRequest) => {
    dispatch({ type: 'change', field: 'isLoading', value: true });

    const users = await fetchService.get<UsersListResponse[]>('users')
      .then((response: UsersListResponse[]) => {
        return response;
      })
      .catch((error) => {
        notify(error);
      });

    if (users?.length && (body.email && body.password)) {
      users.forEach((user: any) => {
        if (user.userEmail === body.email && user.userPassword === body.password) {
          dispatch({ type: 'change', field: 'notSignedIn', value: false });
          dispatch({ type: 'change', field: 'isLoading', value: false });
          notify({ passwordIncorrect: false });
          login();
        } else {
          dispatch({ type: 'change', field: 'isLoading', value: false });
          dispatch({ type: 'change', field: 'notSignedIn', value: true });
        }
      });
    }
  };

  const onSubmit = () => handleSubmit(handleOnSubmit);

  return (
    <Grid
      sx={{
        display: 'grid',
        placeItems: 'center',
        width: '100%',
        height: '100%'
      }}
    >
      <SignIn
        isLoading={isLoading}
        notSignedIn={notSignedIn}
        formErrors={formErrors}
        register={register}
        onSubmit={onSubmit}
      />
    </Grid>
  )
}, ErrorFallbackComponent);

export default SignInContainer;

