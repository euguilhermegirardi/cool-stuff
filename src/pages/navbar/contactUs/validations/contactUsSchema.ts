import * as yup from 'yup';

export const contactUsSchema = yup.object({
  name: yup
    .string()
    .required()
  ,
  email: yup
    .string()
    .email()
    .required()
  ,
  message: yup
    .string()
    .min(10, 'The message is too short - it should be 10 characters minimum.')
    .required('No message provided.')
  ,
});
