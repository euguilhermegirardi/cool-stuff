import { useForm } from 'react-hook-form';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { mockEmptySignInFormErrors, mockSignInFormErrors } from './models/signInProps';
import { mockOnSubmit } from '../../../shared/models/unitTestingProps';
import MockTheme from '../../../tests/mockTheme';
import translations from '../../../utils/translations';
import LoginRequest from '../interfaces/loginRequest';
import SignIn from '../signIn';

describe('Sign In Component', () => {
  const SignInTestContainer = ({
    isLoading,
    notSignedIn,
    formErrors,
  }: {
    isLoading: boolean,
    notSignedIn: boolean,
    formErrors: {
      email?: {
        message?: string;
      };
      password?: {
        message?: string;
      };
    },
  }
  ) => {
    const { register } = useForm<LoginRequest>({
      defaultValues: {
        email: 'testing email',
        password: 'testing password'
      }
    });

    return (
      <BrowserRouter>
        <MockTheme>
          <SignIn
            isLoading={isLoading}
            notSignedIn={notSignedIn}
            formErrors={formErrors}
            register={register}
            onSubmit={mockOnSubmit}
          />
        </MockTheme>
      </BrowserRouter>
    )
  };

  const renderSignInComponent = (
    isLoading: boolean,
    notSignedIn: boolean,
    formErrors: {
      email?: {
        message?: string;
      };
      password?: {
        message?: string;
      };
    },
  ) =>
    render(
      <SignInTestContainer
        isLoading={isLoading}
        notSignedIn={notSignedIn}
        formErrors={formErrors}
      />
    );

  it('should render the component', () => {
    renderSignInComponent(false, false, mockEmptySignInFormErrors);
    expect(screen).not.toBeNull();
  });

  it('should render all the elements on the page', () => {
    renderSignInComponent(false, false, mockEmptySignInFormErrors);
    const title = screen.getByText(translations.login.title);
    const subtitle = screen.getByText(translations.coolStuff);
    const emailInput = screen.getByRole('textbox');
    const passwordInput = screen.getByPlaceholderText(translations.password);
    const signButton = screen.getByRole('button', { name: translations.login.signIn });
    const signUpLink = screen.getByRole('link', { name: translations.login.singUp });

    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(signButton).toBeInTheDocument();
    expect(signUpLink).toBeInTheDocument();
  });

  it('should render the "notLoggedIn" message', () => {
    renderSignInComponent(false, true, mockEmptySignInFormErrors);
    const notSignedInMsg = screen.getByText(translations.login.notSignedIn);

    expect(notSignedInMsg).toBeInTheDocument();
  });

  it('should render the loading circular progress', async () => {
    renderSignInComponent(true, false, mockEmptySignInFormErrors);
    const progressbar = await screen.findByRole('progressbar');

    expect(progressbar).toBeInTheDocument();
  });

  it('should render the form error messages', () => {
    renderSignInComponent(false, false, mockSignInFormErrors);
    const emailErrorMsg = screen.getByText(mockSignInFormErrors.email.message);
    const passwordErrorMsg = screen.getByText(mockSignInFormErrors.password.message);

    expect(emailErrorMsg).toBeInTheDocument();
    expect(passwordErrorMsg).toBeInTheDocument();
  });

  it('should match the snapshot with form errors', () => {
    const signInComponent = renderSignInComponent(false, false, mockSignInFormErrors);
    expect(signInComponent).toMatchSnapshot();
  });

  it('should match the snapshot without form errors', () => {
    const signInComponent = renderSignInComponent(false, false, mockEmptySignInFormErrors);
    expect(signInComponent).toMatchSnapshot();
  });
});
