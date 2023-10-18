import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import jest from 'jest-mock';
import MockTheme from 'tests/mockComponents/mockTheme';
import translations from 'utils/translations';
import Dashboard from '../dashboard';

const mockContentInnerWidth = 1000;
const mockComponentRef = {};
const mockHandleLogout = jest.fn();

describe('Dashborad Component', () => {
  const renderDashboard = () => {
    render(
      <BrowserRouter>
        <MockTheme>
          <Dashboard
            contentInnerWidth={mockContentInnerWidth}
            componentRef={mockComponentRef}
            handleLogOut={mockHandleLogout}
          />
        </MockTheme>
      </BrowserRouter>
    )
  };

  beforeEach(() => renderDashboard());

  it('should render the component', () => {
    expect(screen).not.toBeNull();
    screen.debug(undefined, Infinity);
  });

  it('should render the elements on the page', async () => {
    const title = await screen.findByText(translations.dashboard.worldOfPokemonTitle);
    const subtitle = await screen.findByText(translations.dashboard.worldOfPokemonTxt);
    const image = await screen.findByRole('img', { name: /gengar\-image\-png/i });

    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });
});
