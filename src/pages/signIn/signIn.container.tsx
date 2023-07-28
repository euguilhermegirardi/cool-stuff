import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import LoginRequest from './interfaces/loginRequest';
import SignIn from './signIn';
import { loginSchema } from './validations/loginSchema';
import useAuth from '../../hooks/useAuth';
import useLocalStorage from '../../hooks/useLocalStorage';

const SignInContainer = () => {
  const [users, setUsers] = useState<any>([]);
  const [notSignedIn, setNotSignedIn] = useState(false);

  const { login } = useAuth();

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
    if (users.length && (body.email && body.password)) {
      users.forEach((user: any) => {
        if (user.userEmail === body.email && user.userPassword === body.password) {
          setNotSignedIn(false);
          login(body.email, body.password);
        } else {
          setNotSignedIn(true);
        }
      });
    }
  };

  const onSubmit = () => handleSubmit(handleOnSubmit);

  const handleGetUsers = async () => {
    await fetch('http://localhost:3000/users')
      .then(response => { return response.json(); })
      .then(data => {
        if (data.length) {
          setUsers(data)
        }
      })
  };

  useEffect(() => {
    handleGetUsers();
  }, [])

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
