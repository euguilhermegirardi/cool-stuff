import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import SignUpRequest from './interfaces/signUpRequest';
import SignUp from './signUp';
import { signUpSchema } from './validations/signUpSchema';
import useLocalStorage from '../../hooks/useLocalStorage';
import ApplicationRoutes from '../../utils/navigation/applicationRoutes';

const SignUpContainer = () => {
  const [, setUserEmail] = useLocalStorage('cool-stuff-email', '');

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
    formState,
  } = useForm<SignUpRequest>({
    resolver: yupResolver(signUpSchema),
  });

  // why it's not calling this function?
  const handleOnSubmit = (body: SignUpRequest) => {
    setUserEmail(body.email);
    // set password as well
    navigate(ApplicationRoutes.signIn);
    console.log('kai')
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
