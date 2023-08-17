import jest from 'jest-mock';

export const mockInputId = 'password';
export const mockInputName = 'PasswordInputTest';
export const mockHandleMouseDownPassword = jest.fn();
export const mockHandleShowPassword = jest.fn();

export const mockPasswordFormErrors = {
  password: {
    message: 'password is required',
  }
};

export const mockPasswordEmptyFormErrors = {
  password: {
    message: '',
  }
};
