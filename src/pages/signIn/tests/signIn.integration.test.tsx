import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { config, mockLogin, renderSignInContent, server } from './utils/renderSignIn';
import { mockUsers } from '../../../tests/mockData/users/mockUsers';
import translations from '../../../utils/translations';

const prepareRender = async () => {
  server.use(
    rest.get(
      `${config.core.api.baseUrl}/users`,
      async (req, res, ctx) => {
        return (
          res(ctx.json(mockUsers))
        )
      }
    )
  );

  renderSignInContent();
};

beforeEach(() => prepareRender());

describe('Sign In Integration Test', () => {
  it('should render the component', async () => {
    expect(screen).not.toBeNull();
  });

  it('should render all elements on the page', () => {
    const title = screen.getByText(translations.login.title);
    const subtitle = screen.getByText(translations.coolStuff);
    const emailSVG = screen.getByTestId('MailOutlineIcon');
    const emailInput = screen.getByRole('textbox');
    const passwordSVG = screen.getByRole('img', { name: /password\-locker/i });
    const passwordInput = screen.getByPlaceholderText(translations.password);
    const visibleIcon = screen.getByTestId('VisibilityOffIcon');
    const signInBtn = screen.getByRole('button', { name: translations.login.signIn });
    const signUpLink = screen.getByText(translations.login.singUp);

    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
    expect(emailSVG).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordSVG).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(visibleIcon).toBeInTheDocument();
    expect(signInBtn).toBeInTheDocument();
    expect(signUpLink).toBeInTheDocument();
  });

  it('should be able to type in the user email', async () => {
    const emailInput = screen.getByRole('textbox');

    expect(emailInput).toHaveValue('');

    await userEvent.type(emailInput, 'signInIntegration@test.com');

    expect(emailInput).toHaveValue('signInIntegration@test.com');
  });

  it('should be able to type in the user password', async () => {
    const passwordInput = screen.getByPlaceholderText('password');

    expect(passwordInput).toHaveValue('');

    await userEvent.type(passwordInput, 'testing the password input');

    expect(passwordInput).toHaveValue('testing the password input');
  });

  it('should show user email error message', async () => {
    const emailInput = screen.getByRole('textbox');
    const signInBtn = screen.getByRole('button', { name: translations.login.signIn });

    await userEvent.type(emailInput, ' ');
    await userEvent.click(signInBtn);

    expect(screen.findByText(/email must be a valid email/i));
  });

  it('should show user password error message', async () => {
    const passwordInput = screen.getByPlaceholderText(/password/i);
    const signInBtn = screen.getByRole('button', { name: translations.login.signIn });

    await userEvent.type(passwordInput, ' ');
    await userEvent.click(signInBtn);

    expect(screen.findByText(/Password is too short - it should be 5 characters minimum./i));
  });

  it('should be able to submit and show loading progressbar', async () => {
    const emailInput = screen.getByRole('textbox');
    const passwordInput = screen.getByPlaceholderText(/password/i);
    const signInBtn = screen.getByRole('button', { name: translations.login.signIn });

    await userEvent.type(emailInput, 'testSignIn@test.com');
    await userEvent.type(passwordInput, 'testSignInPassword');

    expect(emailInput).toHaveValue('testSignIn@test.com');
    expect(passwordInput).toHaveValue('testSignInPassword');

    await userEvent.click(signInBtn);

    expect(await screen.findByRole('progressbar')).toBeInTheDocument();

    setTimeout(() => {
      expect(mockLogin).toHaveBeenCalled();
    }, 2000);
  });
});
