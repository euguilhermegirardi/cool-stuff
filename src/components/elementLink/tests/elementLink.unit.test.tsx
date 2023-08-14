import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import MockTheme from '../../../tests/mockTheme';
import translations from '../../../utils/translations';
import ElementLink from '../elementLink';
import ElementLinkProps from '../interfaces/elementLinkProps';


const link = '/';
const text = translations.notFound.return;

describe('ElementLink component', () => {
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

  it('should render the component', () => {
    renderElementLinkComponent({ link, text });
    expect(screen).not.toBeNull();
  });

  it('should render the text property', async () => {
    renderElementLinkComponent({ link, text });
    const textMsg = await screen.findByText(text);

    expect(textMsg).toBeInTheDocument();
    screen.debug(undefined, 999999)
  });
});
