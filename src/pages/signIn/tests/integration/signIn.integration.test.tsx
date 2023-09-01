import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { mockUsers } from '../../../../tests/mockData/users/mockUsers';
import translations from '../../../../utils/translations';
import { config, renderSignInContent, server } from '../utils/renderSignIn';

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
    screen.debug(undefined, 999999)
  });

  it('should be able to type in the user email', async () => {
    const input = screen.getByRole('textbox');

    expect(input).toHaveValue('');
    await userEvent.type(input, 'testing the input');
    expect(input).toHaveValue('testing the input');
  });

  it('should be able to type in the user password', async () => {
    const passwordInput = screen.getByRole('textbox');

    expect(passwordInput).toHaveValue('');
    await userEvent.type(passwordInput, 'testing the password input');
    expect(passwordInput).toHaveValue('testing the password input');
  });
});
