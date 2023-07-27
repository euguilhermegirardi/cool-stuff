import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import LoginRequest from './interfaces/loginRequest';
import SignIn from './signIn';
import { loginSchema } from './validations/loginSchema';
import useAuth from '../../hooks/useAuth';
import useLocalStorage from '../../hooks/useLocalStorage';

const SignInContainer = () => {
  const [notSignedIn, setNotSignedIn] = useState(false);

  const { login } = useAuth();

  const [email] = useLocalStorage('cool-stuff-email', '');
  const [password] = useLocalStorage('cool-stuff-password', '');
  const [userEmail, setUserEmail] = useLocalStorage('cool-stuff-email', '');

  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
    formState,
  } = useForm<LoginRequest>({
    resolver: yupResolver(loginSchema),
  });

  const handleOnSubmit = (body: LoginRequest) => {
    if (email == body.email && password == body.password) {
      setNotSignedIn(false);
      login(body.email, body.password);
    } else if (email !== body.email && password !== body.password) {
      setNotSignedIn(true);
    }
  };

  const onSubmit = () => handleSubmit(handleOnSubmit);

  const handle = async () => {
    await fetch('http://localhost:3000/users')

    await fetch('http://localhost:3000/users')
      .then(function (response) { return response.json(); })
      .then(function (data) {
        const items = data;
        console.log(items)
      })
  };

  useEffect(() => {
    handle();
  }, []);

  return (
    <SignIn
      notSignedIn={notSignedIn}
      formErrors={formErrors}
      register={register}
      onSubmit={onSubmit}
    />
  )
};

export default SignInContainer;
