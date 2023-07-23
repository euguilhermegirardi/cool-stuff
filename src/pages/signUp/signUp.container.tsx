import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import SignUpRequest from './interfaces/signUpRequest';
import SignUp from './signUp';
import { signUpSchema } from './validations/signUpSchema';
import useAuth from '../../hooks/useAuth';
import useSessionStorage from '../../hooks/useSessionStorage';
import ApplicationRoutes from '../../utils/navigation/applicationRoutes';

const SignUpContainer = () => {
  const [passwordDoNotMatch, setPasswordDoNotMatch] = useState(false);

  const { login } = useAuth();
  const [, setUserEmail] = useSessionStorage('cool-stuff-email', '');
  const [, setUserPassword] = useSessionStorage('cool-stuff-password', '');
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
    formState,
    getValues,
  } = useForm<SignUpRequest>({
    resolver: yupResolver(signUpSchema),
  });

  const validateInput = () => {
    const confirmPassword = getValues('confirmPassword');
    const password = getValues('password');

    if (confirmPassword !== password) {
      return setPasswordDoNotMatch(true);
    } else {
      return setPasswordDoNotMatch(false);
    }
  };

  const handleOnSubmit = (body: SignUpRequest) => {
    login(body.email, body.password)
    navigate(ApplicationRoutes.signIn);
  };

  const onSubmit = () => handleSubmit(handleOnSubmit);

  return (
    <SignUp
      passwordDoNotMatch={passwordDoNotMatch}
      formErrors={formErrors}
      register={register}
      validateInput={validateInput}
      onSubmit={onSubmit}
    />
  );
};

export default SignUpContainer;
