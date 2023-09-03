import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { mockHandleOnSubmit, renderSignUpContent, server } from './utils/renderSignUp';
import translations from '../../../utils/translations';

const prepareRender = async () => {
  server.use();

  renderSignUpContent();
};

beforeEach(() => prepareRender());

describe('Sign Up Integration Test', () => {
  it('should render the component', () => {
    expect(screen).not.toBeNull();
  });

  it('should render all the elements on the page', () => {
    const title = screen.getByText(translations.signUp.signUpToPokedex);
    const subtitle = screen.getByText(translations.coolStuff);
    const emailInput = screen.getByRole('textbox');
    const passwordInput = screen.getByPlaceholderText(translations.password);
    const confirmPasswordInput = screen.getByPlaceholderText(translations.signUp.confirmPassword);
    const registerBtn = screen.getByRole('button', { name: translations.signUp.register });
    const returnLink = screen.getByRole('link', { name: translations.return });

    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(confirmPasswordInput).toBeInTheDocument();
    expect(registerBtn).toBeInTheDocument();
    expect(returnLink).toBeInTheDocument();
  });

  it('should be able to type in the user email', async () => {
    const emailInput = screen.getByRole('textbox');

    expect(emailInput).toHaveValue('');

    await userEvent.type(emailInput, 'testing@test.com');

    expect(emailInput).toHaveValue('testing@test.com');
  });

  it('should be able to type in the user password', async () => {
    const passwordInput = screen.getByPlaceholderText('password');

    expect(passwordInput).toHaveValue('');

    await userEvent.type(passwordInput, 'testingThePasswordInput');

    expect(passwordInput).toHaveValue('testingThePasswordInput');
  });

  it('should be able to type in the user confirm password', async () => {
    const confirmPasswordInput = screen.getByPlaceholderText('confirm password');

    expect(confirmPasswordInput).toHaveValue('');

    await userEvent.type(confirmPasswordInput, 'testingThePasswordInput');

    expect(confirmPasswordInput).toHaveValue('testingThePasswordInput');
  });

  it('should show error messages', async () => {
    const registerBtn = screen.getByRole('button', { name: translations.signUp.register })

    await userEvent.click(registerBtn);

    expect(screen.findByText(/email is a required field/i));
    expect(screen.findByText(/Password is too short - it should be 5 characters minimum./i));
    expect(screen.findByText(/confirmPassword is a required field/i));
  });

  it('should be able to submit', async () => {
    const emailInput = screen.getByRole('textbox');
    const passwordInput = screen.getByPlaceholderText('password');
    const confirmPasswordInput = screen.getByPlaceholderText('confirm password');
    const registerBtn = screen.getByRole('button', { name: translations.signUp.register });

    await userEvent.type(emailInput, 'testSignUp@test.com');
    await userEvent.type(passwordInput, 'signUptesting...');
    await userEvent.type(confirmPasswordInput, 'signUptesting...');

    expect(emailInput).toHaveValue('testSignUp@test.com');
    expect(passwordInput).toHaveValue('signUptesting...');
    expect(confirmPasswordInput).toHaveValue('signUptesting...');

    await userEvent.click(registerBtn);

    setTimeout(() => {
      expect(mockHandleOnSubmit).toHaveBeenCalled();
    }, 2000);
  });
});
