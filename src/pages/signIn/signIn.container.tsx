import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import LoginRequest from './interfaces/loginRequest';
import SignIn from './signIn';
import { loginSchema } from './validations/loginSchema';

const SignInContainer = () => {

  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
    formState,
  } = useForm<LoginRequest>({
    resolver: yupResolver(loginSchema),
  });

  const handleOnSubmit = (body: LoginRequest) => {
    console.log('onSubmit', body)
  };

  const onSubmit = () => handleSubmit(handleOnSubmit);

  return (
    <SignIn
      onSubmit={onSubmit}
      register={register}
      formErrors={formErrors}

    />
  )
};

export default SignInContainer;
