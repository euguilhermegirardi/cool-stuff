import jest from 'jest-mock';

export const mockOnSubmit: any = jest.fn();

export const mockSignInFormErrors = {
  email: {
    message: 'testing email',
  },
  password: {
    message: 'testing password'
  }
};

export const mockEmptySignInFormErrors = {
  email: {
    message: '',
  },
  password: {
    message: ''
  }
};
