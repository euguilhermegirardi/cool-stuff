import { useForm } from 'react-hook-form';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { mockSignUpEmptyFormErrors, mockSignUpFormErrors } from './models/signUpProps';
import { mockOnSubmit } from '../../../shared/models/unitTestingProps';
import MockTheme from '../../../tests/mockComponents/mockTheme';
import translations from '../../../utils/translations';
import SignUpRequest from '../interfaces/signUpRequest';
import SignUp from '../signUp';

describe('Sign Up Component', () => {
  const SignUpTestContainer = ({
    isLoading,
    formErrors,
  }: {
    isLoading: boolean,
    formErrors: {
      email?: {
        message?: string;
      };
      password?: {
        message?: string;
      };
      confirmPassword?: {
        message?: string;
      };
    }
  }
  ) => {
    const { register } = useForm<SignUpRequest>({
      defaultValues: {
        email: 'testing signup email',
        password: 'testing signup password',
        confirmPassword: 'testing signup confirmPassword',
      }
    });

    return (
      <BrowserRouter>
        <MockTheme>
          <SignUp
            isLoading={isLoading}
            formErrors={formErrors}
            register={register}
            onSubmit={mockOnSubmit}
          />
        </MockTheme>
      </BrowserRouter>
    )
  };

  const renderSignUpComponent = (
    isLoading: boolean,
    formErrors: {
      email?: {
        message?: string;
      };
      password?: {
        message?: string;
      };
      confirmPassword?: {
        message?: string;
      };
    }
  ) =>
    render(
      <SignUpTestContainer
        isLoading={isLoading}
        formErrors={formErrors}
      />
    );

  it('should render the component', () => {
    renderSignUpComponent(false, mockSignUpEmptyFormErrors);
    expect(screen).not.toBeNull();
  });

  it('should render all the elements on the page', () => {
    renderSignUpComponent(false, mockSignUpEmptyFormErrors);
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

  it('should render the loading circular progress', async () => {
    renderSignUpComponent(true, mockSignUpEmptyFormErrors);
    const progressbar = await screen.findByRole('progressbar');

    expect(progressbar).toBeInTheDocument();
  });

  it('should render the form error messages', () => {
    renderSignUpComponent(true, mockSignUpFormErrors);
    const emailErrorMsg = screen.getByText(mockSignUpFormErrors.email.message);
    const passwordErrorMsg = screen.getByText(mockSignUpFormErrors.password.message);
    const confirmPasswordErrorMsg = screen.getByText(mockSignUpFormErrors.confirmPassword.message);

    expect(emailErrorMsg).toBeInTheDocument();
    expect(passwordErrorMsg).toBeInTheDocument();
    expect(confirmPasswordErrorMsg).toBeInTheDocument();
  });

  it('should match the snapshot with form errors', () => {
    const signUpComponent = renderSignUpComponent(true, mockSignUpFormErrors);
    expect(signUpComponent).toMatchSnapshot();
  });

  it('should match the snapshot without form errors', () => {
    const signUpComponent = renderSignUpComponent(true, mockSignUpEmptyFormErrors);
    expect(signUpComponent).toMatchSnapshot();
  });
});
