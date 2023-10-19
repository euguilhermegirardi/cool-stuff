import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import jest from 'jest-mock';
import MockTheme from 'tests/mockComponents/mockTheme';
import MobilePokemonTableList from '../mobilePokemonTableList';

const mockPokemonData = [
  {
    attack: 49,
    baseExperience: 64,
    defense: 49,
    hp: 45,
    name: "Bulbasaur - Test",
    specialAttack: 65,
    specialDefense: 65,
    speed: 45,
  },
];

const mockEmptySelectedPokemon: any = [];

const mockToggleDrawer = jest.fn();

describe('Mobile Pokemon Table List', () => {
  const renderMobilePokemonTableList = () => {
    render(
      <MockTheme>
        <MobilePokemonTableList
          isDrawerOpen={false}
          selectedPokemon={mockEmptySelectedPokemon}
          pokemonData={mockPokemonData}
          toggleDrawer={mockToggleDrawer}
        />
      </MockTheme>
    );
  };

  beforeEach(() => renderMobilePokemonTableList());

  it('should render the component', () => {
    expect(screen).not.toBeNull();

    screen.debug(undefined, Infinity);
  });

  it('should render the elements on the page', async () => {
    const title = await screen.findByText(/pokemon/i);
    const pokemonName = await screen.findByText(/bulbasaur - test/i);
    const arrow = await screen.findByTestId(/keyboardarrowrighticon/i);

    expect(title).toBeInTheDocument();
    expect(pokemonName).toBeInTheDocument();
    expect(arrow).toBeInTheDocument();
  });

  it('should trigger the toggleDrawer function', async () => {
    const element = await screen.findByText(/bulbasaur - test/i);

    await userEvent.click(element);

    expect(mockToggleDrawer).toHaveBeenCalledTimes(1);
  });
});
