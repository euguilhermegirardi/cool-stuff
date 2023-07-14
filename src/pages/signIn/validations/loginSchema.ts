import * as yup from 'yup';

export const loginSchema = yup.object({
  email: yup
    .string()
    .email()
    .required()
  ,
  password: yup
    .string()
    .min(5, 'Password is too short - it should be 5 characters minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
    .required('No password provided.')
  ,
});
