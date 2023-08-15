import { useForm } from 'react-hook-form';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MockEmailInputProps } from './interfaces/emailInputProps';
import { mockEmptyFormErrors, mockFormErrors } from './models/emailInputProps';
import EmailInput from '../emailInput';

describe('Email Input Component', () => {
  const EmailInputTestContainer = ({
    formErrors,
  }: {
    formErrors: {
      email?: {
        message?: string;
      };
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
      email?: {
        message?: string;
      };
    }
  ) =>
    render(<EmailInputTestContainer formErrors={formErrors} />);

  it('should render the component', () => {
    renderEmailInputComponent(mockEmptyFormErrors);
  });

  it('should render the input with the svg icon', () => {
    renderEmailInputComponent(mockEmptyFormErrors);
    const svgIcon = screen.getByTestId('MailOutlineIcon');
    const input = screen.getByRole('textbox');

    expect(svgIcon).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  it('should be able to type in the input', async () => {
    renderEmailInputComponent(mockEmptyFormErrors);
    const input = screen.getByRole('textbox');

    expect(input).toHaveValue('');
    await userEvent.type(input, 'testing the input');
    expect(input).toHaveValue('testing the input');
  });

  it('should render the form error message', () => {
    renderEmailInputComponent(mockFormErrors);
    const errorMessage = screen.getByText(mockFormErrors.email.message);

    expect(errorMessage).toBeInTheDocument();
  })
});
