import { useForm } from 'react-hook-form';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MockPasswordInputProps } from './interfaces/passwordInputProps';
import { mockHandleMouseDownPassword, mockHandleShowPassword, mockInputId, mockInputName, mockPasswordEmptyFormErrors, mockPasswordFormErrors } from './models/passwordInputProps';
import PasswordInput from '../passwordInput';

describe('Password Input Component', () => {
  const PasswordInputTestContainer = ({
    inputId,
    inputName,
    showPassword,
    formErrors,
    handleMouseDownPassword,
    handleShowPassword,
  }: {
    inputId: string;
    inputName: string;
    showPassword: boolean;
    formErrors?: {
      message?: string;
    };
    handleMouseDownPassword: (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => void;
    handleShowPassword: () => void;
  }) => {
    const { register } = useForm<MockPasswordInputProps>({
      defaultValues: {
        test: 'joe doe',
      },
    });

    return (
      <PasswordInput
        inputId={inputId}
        inputName={inputName}
        showPassword={showPassword}
        formErrors={formErrors}
        handleMouseDownPassword={handleMouseDownPassword}
        register={register}
        handleShowPassword={handleShowPassword}
      />
    );
  };

  const renderPasswordInput = (
    showPassword: boolean,
    formErrors?: {
      message?: string;
    }
  ) =>
    render(
      <PasswordInputTestContainer
        inputId={mockInputId}
        inputName={mockInputName}
        showPassword={showPassword}
        formErrors={formErrors}
        handleMouseDownPassword={mockHandleMouseDownPassword}
        handleShowPassword={mockHandleShowPassword}
      />
    );

  it('should render the component', () => {
    renderPasswordInput(false, mockPasswordEmptyFormErrors);
    expect(screen).not.toBeNull();
  });

  it('should render the input with the image icon', () => {
    renderPasswordInput(false, mockPasswordEmptyFormErrors);
    const imgLocker = screen.getByRole('img', { name: /password\-locker/i });
    const passwordInput = screen.getByPlaceholderText(/password/i);
    const showPasswordBtn = screen.getByRole('button', {
      name: /toggle password visibility/i
    });
    const visibilityOffIcon = screen.getByTestId('VisibilityOffIcon');

    expect(imgLocker).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(showPasswordBtn).toBeInTheDocument();
    expect(visibilityOffIcon).toBeInTheDocument();
  });

  it('should be able to type in the input with the visibilityOnIcon', async () => {
    renderPasswordInput(true, mockPasswordEmptyFormErrors);
    const passwordInput = screen.getByPlaceholderText(/password/i);
    const visibilityIcon = screen.getByTestId('VisibilityIcon');

    expect(passwordInput).toHaveValue('');
    await userEvent.type(passwordInput, 'testing the password input');
    expect(passwordInput).toHaveValue('testing the password input');
    expect(visibilityIcon).toBeInTheDocument();
  });

  it('should render the form error message', () => {
    renderPasswordInput(false, mockPasswordFormErrors);
    const errorMessage = screen.getByText(mockPasswordFormErrors.message);

    expect(errorMessage).toBeInTheDocument();
  });

  it('should match the snapshot with form errors', () => {
    const passwordInputComponent = renderPasswordInput(false, mockPasswordFormErrors);
    expect(passwordInputComponent).toMatchSnapshot();
  });

  it('should match the snapshot without form errors', () => {
    const passwordInputComponent = renderPasswordInput(false, mockPasswordEmptyFormErrors);
    expect(passwordInputComponent).toMatchSnapshot();
  });
});
