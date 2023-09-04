import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { ErrorFallbackComponent } from 'components/errorFallbackComponent/errorFallbackComponent';
import { withErrorBoundary } from 'react-error-boundary';
import ApplicationRoutes from 'utils/navigation/applicationRoutes';
import SignUpRequest from './interfaces/signUpRequest';
import SignUp from './signUp';
import validationSignUpSchema from './validations/validationSignUpSchema';

const SignUpContainer = withErrorBoundary(() => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm<SignUpRequest>({
    resolver: yupResolver(validationSignUpSchema),
  });

  const handleOnSubmit = async (data: SignUpRequest) => {
    setIsLoading(true);

    await axios.post('http://localhost:3000/users', {
      userEmail: data.email,
      userPassword: data.password,
    })
      .then(() => {
        setIsLoading(false);
        navigate(ApplicationRoutes.signIn);
      })
      .catch((error) => {
        setError(error)
      })
      .finally(() => {
        setIsLoading(false);
      });
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
}, ErrorFallbackComponent);

export default SignUpContainer;
