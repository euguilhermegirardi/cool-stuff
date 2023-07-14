import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import LoginRequest from './interfaces/loginRequest';
import SignIn from './signIn';
import { loginSchema } from './validations/loginSchema';
import useLocalStorage from '../../hooks/useLocalStorage';
import ApplicationRoutes from '../../utils/navigation/applicationRoutes';

const SignInContainer = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const [email] = useLocalStorage('cool-stuff-email', '');
  const [, setUserEmail] = useLocalStorage('cool-stuff-email', '');
  const [isRememberMe] = useLocalStorage('rememberMe', '');

  const navigate = useNavigate();

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
    setUserEmail(body.email);
    navigate(ApplicationRoutes.dashboard);
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
