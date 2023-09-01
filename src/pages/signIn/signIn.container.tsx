import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import LoginRequest from './interfaces/loginRequest';
import SignIn from './signIn';
import { loginSchema } from './validations/loginSchema';
import useAuth from '../../hooks/useAuth';

const SignInContainer = () => {
  const [users, setUsers] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [notSignedIn, setNotSignedIn] = useState(false);

  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
    formState,
  } = useForm<LoginRequest>({
    resolver: yupResolver(loginSchema),
  });

  const handleOnSubmit = (body: LoginRequest) => {
    setIsLoading(true);

    setTimeout(() => {
      if (users.length && (body.email && body.password)) {
        users.forEach((user: any) => {
          if (user.userEmail === body.email && user.userPassword === body.password) {
            setNotSignedIn(false);
            setIsLoading(false);
            login(body.email, body.password);
          } else {
            setIsLoading(false);
            setNotSignedIn(true);
          }
        });
      }
    }, 1500);
  };

  const onSubmit = () => handleSubmit(handleOnSubmit);

  const handleGetUsers = async () => {
    await axios.get('http://localhost:3000/users')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => { }
      );
  };

  useEffect(() => {
    handleGetUsers();
  }, []);

  return (
    <SignIn
      isLoading={isLoading}
      notSignedIn={notSignedIn}
      formErrors={formErrors}
      register={register}
      onSubmit={onSubmit}
    />
  )
};

export default SignInContainer;
