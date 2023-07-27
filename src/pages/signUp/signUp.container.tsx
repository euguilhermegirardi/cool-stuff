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
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
    getValues,
  } = useForm<SignUpRequest>({
    resolver: yupResolver(validationSignUpSchema),
  });

  const handleSignUp = async (email: string, password: string) => {
    await fetch('http://localhost:3000/users', {
      method: 'POST',
      body: JSON.stringify({
        userEmail: email,
        userPassword: password,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  };

  const handleOnSubmit = (body: SignUpRequest) => {
    handleSignUp(body.email, body.confirmPassword);
    navigate(ApplicationRoutes.signIn);
  };

  const onSubmit = () => handleSubmit(handleOnSubmit);

  return (
    <SignUp
      formErrors={formErrors}
      register={register}
      onSubmit={onSubmit}
    />
  );
};

export default SignUpContainer;
