import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import LoginRequest from './interfaces/loginRequest';
import SignIn from './signIn';
import { loginSchema } from './validations/loginSchema';
import useLocalStorage from '../../hooks/useLocalStorage';

const SignInContainer = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const [email] = useLocalStorage('email', '');
  const [isRememberMe] = useLocalStorage('rememberMe', '');
  const [, setUserEmail] = useLocalStorage('email', '');

  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
    formState,
  } = useForm<LoginRequest>({
    resolver: yupResolver(loginSchema),
  });

  const handleRememberMe = () => setRememberMe((set) => !set);

  const handleOnSubmit = (body: LoginRequest) => {
    console.log('onSubmit', body)
    setUserEmail(body.email);
  };

  const onSubmit = () => handleSubmit(handleOnSubmit);

  return (
    <SignIn
      defaultValue={isRememberMe && email ? email : null}
      formErrors={formErrors}
      register={register}
      handleRememberMe={handleRememberMe}
      onSubmit={onSubmit}
    />
  )
};

export default SignInContainer;
