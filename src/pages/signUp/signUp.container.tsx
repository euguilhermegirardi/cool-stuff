import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import SignUpRequest from './interfaces/signUpRequest';
import SignUp from './signUp';
import { signUpSchema } from './validations/signUpSchema';
import useLocalStorage from '../../hooks/useLocalStorage';
import { useTranslations } from '../../hooks/useTranslations';
import ApplicationRoutes from '../../utils/navigation/applicationRoutes';

const SignUpContainer = () => {
  const [passwordDoNotMatch, setPasswordDoNotMatch] = useState(false);

  const [, setUserEmail] = useLocalStorage('cool-stuff-email', '');
  const navigate = useNavigate();
  const translations = useTranslations();

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

  // why it's not calling this function?
  const handleOnSubmit = (body: SignUpRequest) => {
    // setUserEmail(body.email);
    // set password as well
    // navigate(ApplicationRoutes.signIn);
    console.log('kai')
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
