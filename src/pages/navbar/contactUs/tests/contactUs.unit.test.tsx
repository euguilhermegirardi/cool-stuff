import { useForm } from 'react-hook-form';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { mockOnSubmit } from 'shared/models/unitTestingProps';
import MockTheme from 'tests/mockComponents/mockTheme';
import translations from 'utils/translations';
import { mockContactUsFormErrors, mockEmptyContactUsFormErrors } from './models/contactUsProps';
import ContactUs from '../contactUs';
import { ContactUsRequest } from '../interfaces/contactUsRequest';

describe('Contact Us Component', () => {
  const ContactUsContainer = ({
    isLoading,
    formErrors,
  }: {
    isLoading: boolean;
    formErrors: {
      name?: {
        message?: string;
      };
      email?: {
        message?: string;
      };
      message?: {
        message?: string;
      };
    },
  }) => {
    const { register } = useForm<ContactUsRequest>({
      defaultValues: {
        name: '',
        email: '',
        message: '',
      }
    });

    return (
      <BrowserRouter>
        <MockTheme>
          <ContactUs
            isLoading={isLoading}
            register={register}
            formErrors={formErrors}
            onSubmit={mockOnSubmit}
          />
        </MockTheme>
      </BrowserRouter>
    )
  };

  const renderContactUs = (
    isLoading: boolean,
    formErrors: {
      name?: {
        message?: string;
      },
      email?: {
        message?: string;
      },
      message?: {
        message?: string;
      },
    }) => {
    render(
      <ContactUsContainer
        isLoading={isLoading}
        formErrors={formErrors}
      />
    )
  }

  it('should render the component', () => {
    renderContactUs(false, mockEmptyContactUsFormErrors);

    expect(screen).not.toBeNull();
  });

  it('should render the elements on the screen', async () => {
    renderContactUs(false, mockEmptyContactUsFormErrors);
    const title = await screen.findByText(translations.contactUs.title);
    const subtitle = await screen.findByText(translations.contactUs.subtitle);
    const name = await screen.findByPlaceholderText(/name/i);
    const email = await screen.findByPlaceholderText(/email/i);
    const message = await screen.findByPlaceholderText(/message/i);
    const button = await screen.findByRole('button', { name: /submit/i });
    const image = await screen.findByRole('img', { name: /ghost\-pokemon/i });

    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(message).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });

  it('should be able to type in the inputs and submit the form', async () => {
    renderContactUs(false, mockEmptyContactUsFormErrors);
    const name = await screen.findByPlaceholderText(/name/i);
    const email = await screen.findByPlaceholderText(/email/i);
    const message = await screen.findByPlaceholderText(/message/i);
    const button = await screen.findByRole('button', { name: /submit/i });
    const typeInName = 'Kaiowa';
    const typeInEmail = 'kaiowa@test.com';
    const typeInMessage = 'Kaiowa testing the form';
    const form = await screen.findByRole('form');

    expect(form).toBeInTheDocument();
    expect(name).toHaveValue('');
    expect(email).toHaveValue('');
    expect(message).toHaveValue('');

    await userEvent.type(name, typeInName);
    await userEvent.type(email, typeInEmail);
    await userEvent.type(message, typeInMessage);

    expect(name).toHaveValue(typeInName);
    expect(email).toHaveValue(typeInEmail);
    expect(message).toHaveValue(typeInMessage);

    await userEvent.click(button);

    expect(mockOnSubmit).toHaveBeenCalled();
  });

  it('should render the error messages', async () => {
    renderContactUs(false, mockContactUsFormErrors);
    const name = await screen.findByText(mockContactUsFormErrors.name.message);
    const email = await screen.findByText(mockContactUsFormErrors.email.message);
    const message = await screen.findByText(mockContactUsFormErrors.message.message);

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(message).toBeInTheDocument();
  });

  it('should render the loading', async () => {
    renderContactUs(true, mockEmptyContactUsFormErrors);
    const loading = await screen.findByRole('progressbar');

    expect(loading).toBeInTheDocument();
  });
});
