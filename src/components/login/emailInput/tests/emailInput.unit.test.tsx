import { useForm } from 'react-hook-form';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MockEmailInputProps } from './interfaces/emailInputProps';
import { mockEmailEmptyFormErrors, mockEmailFormErrors } from './models/emailInputProps';
import EmailInput from '../emailInput';

describe('Email Input Component', () => {
  const EmailInputTestContainer = ({
    formErrors,
  }: {
    formErrors: {
      message?: string;
    }
  }) => {
    const { register } = useForm<MockEmailInputProps>({
      defaultValues: {
        test: 'joe doe',
      },
    });

    return (
      <EmailInput register={register} formErrors={formErrors} />
    );
  };

  const renderEmailInputComponent = (
    formErrors: {
      message?: string;
    }
  ) =>
    render(<EmailInputTestContainer formErrors={formErrors} />);

  it('should render the component', () => {
    renderEmailInputComponent(mockEmailEmptyFormErrors);
    expect(screen).not.toBeNull();
  });

  it('should render the input with the svg icon', () => {
    renderEmailInputComponent(mockEmailEmptyFormErrors);
    const svgIcon = screen.getByTestId('MailOutlineIcon');
    const input = screen.getByRole('textbox');

    expect(svgIcon).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  it('should be able to type in the input', async () => {
    renderEmailInputComponent(mockEmailEmptyFormErrors);
    const input = screen.getByRole('textbox');

    expect(input).toHaveValue('');
    await userEvent.type(input, 'testing the input');
    expect(input).toHaveValue('testing the input');
  });

  it('should render the form error message', () => {
    renderEmailInputComponent(mockEmailFormErrors);
    const errorMessage = screen.getByText(mockEmailFormErrors.message);

    expect(errorMessage).toBeInTheDocument();
  });

  it('should match the snapshot with form errors', () => {
    const emailInputComponent = renderEmailInputComponent(mockEmailFormErrors);
    expect(emailInputComponent).toMatchSnapshot();
  });

  it('should match the snapshot without form errors', () => {
    const emailInputComponent = renderEmailInputComponent(mockEmailEmptyFormErrors);
    expect(emailInputComponent).toMatchSnapshot();
  });
});
