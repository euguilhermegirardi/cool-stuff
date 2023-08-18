import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MockTheme from '../../../tests/mockTheme';
import translations from '../../../utils/translations';
import ElementLink from '../elementLink';
import ElementLinkProps from '../interfaces/elementLinkProps';

const link = '/';
const text = translations.notFound.return;

describe('Element Link component', () => {
  const renderElementLinkComponent = ({
    link,
    text,
  }: ElementLinkProps) =>
    render(
      <BrowserRouter>
        <MockTheme>
          <ElementLink
            link={link}
            text={text}
          />
        </MockTheme>
      </BrowserRouter>
    );

  beforeEach(() => {
    renderElementLinkComponent({ link, text });
  });

  it('should render the component', () => {
    expect(screen).not.toBeNull();
  });

  it('should render the text property', async () => {
    const textMsg = await screen.findByText(text);

    expect(textMsg).toBeInTheDocument();
  });

  it('should the anchor element with the correct attribute', async () => {
    const anchorElement = await screen.findByRole('link', { name: translations.notFound.return });

    expect(anchorElement).toHaveAttribute('href', '/');
  });

  it('should the anchor element and check wrong attribute', async () => {
    const anchorElement = await screen.findByRole('link', { name: translations.notFound.return });

    expect(anchorElement).not.toHaveAttribute('href', '/testing');
  });

  it('should the anchor element and able to click on it', async () => {
    const anchorElement = await screen.findByRole('link', { name: translations.notFound.return });

    await userEvent.click(anchorElement);
  });

  it('should match the snapshot', () => {
    expect(screen).toMatchSnapshot();
  });
});
