import '@testing-library/jest-dom';
import { render, screen, within } from '@testing-library/react';
import jest from 'jest-mock';
import MockTheme from 'tests/mockComponents/mockTheme';
import MuiDrawer from '../muiDrawer';

const mockToggleDrawer = jest.fn();

const mockSprite = {
  "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
};

const mockStats = [
  {
    "base_stat": 45,
    "effort": 0,
    "stat": {
      "name": "hp",
      "url": "https://pokeapi.co/api/v2/stat/1/"
    }
  },
  {
    "base_stat": 49,
    "effort": 0,
    "stat": {
      "name": "attack",
      "url": "https://pokeapi.co/api/v2/stat/2/"
    }
  },
  {
    "base_stat": 49,
    "effort": 0,
    "stat": {
      "name": "defense",
      "url": "https://pokeapi.co/api/v2/stat/3/"
    }
  },
  {
    "base_stat": 65,
    "effort": 1,
    "stat": {
      "name": "special-attack",
      "url": "https://pokeapi.co/api/v2/stat/4/"
    }
  },
  {
    "base_stat": 65,
    "effort": 0,
    "stat": {
      "name": "special-defense",
      "url": "https://pokeapi.co/api/v2/stat/5/"
    }
  },
  {
    "base_stat": 45,
    "effort": 0,
    "stat": {
      "name": "speed",
      "url": "https://pokeapi.co/api/v2/stat/6/"
    }
  }
];

describe('Mui Drawer Component', () => {
  const renderMuiDrawer = () => {
    render(
      <MockTheme>
        <MuiDrawer
          isDrawerOpen={true}
          toggleDrawer={mockToggleDrawer}
          name={'testing pokemon'}
          weight={12}
          sprite={mockSprite.front_default}
          stats={mockStats}
        />
      </MockTheme>
    );
  };

  beforeEach(() => renderMuiDrawer())

  it('should render the component', () => {
    expect(screen).not.toBeNull();
  });

  it('should render the elements on the screen', async () => {
    const presentation = await screen.findByRole('presentation');
    const weight = await screen.findByText(/weight: 12/i);
    const image = await screen.findByRole('img', { name: /testing pokemon/i });
    const stats = await screen.findByText(/stats/i);
    const hp = await screen.findByText(/hp/i);

    expect(within(presentation).findByText(/testing pokemon/i));
  })
})
