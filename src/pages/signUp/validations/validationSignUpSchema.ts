import * as yup from 'yup';

const validationSignUpSchema = yup
  .object({
    email: yup
      .string()
      .email()
      .required()
    ,
    password: yup
      .string()
      .min(5, 'Password is too short - it should be 5 characters minimum.')
      .max(15, 'Password is too long - it should be 15 characters minimum.')
      .required()
    ,
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Password does not match!')
      .required()
    ,
  });

export default validationSignUpSchema;
