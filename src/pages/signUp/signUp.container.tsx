import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import SignUpRequest from './interfaces/signUpRequest';
import SignUp from './signUp';
import validationSignUpSchema from './validations/validationSignUpSchema';
import useAuth from '../../hooks/useAuth';
import useLocalStorage from '../../hooks/useLocalStorage';
import ApplicationRoutes from '../../utils/navigation/applicationRoutes';

const SignUpContainer = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
    getValues,
  } = useForm<SignUpRequest>({
    resolver: yupResolver(validationSignUpSchema),
  });

  const handleOnSubmit = async (data: SignUpRequest) => {
    setIsLoading(true);

    try {
      await fetch('http://localhost:3000/users', {
        method: 'POST',
        body: JSON.stringify({
          userEmail: data.email,
          userPassword: data.password,
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(() => {
          setIsLoading(false);
          navigate(ApplicationRoutes.signIn)
        })
    } catch (error: any) {
      setError(error)
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = () => handleSubmit(handleOnSubmit);

  return (
    <SignUp
      isLoading={isLoading}
      formErrors={formErrors}
      register={register}
      onSubmit={onSubmit}
    />
  );
};

export default SignUpContainer;
