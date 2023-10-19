import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import jest from 'jest-mock';
import MockTheme from 'tests/mockComponents/mockTheme';
import DesktopPokemonTableList from '../desktopPokemonTableList';

describe('Pokemon Table List Component', () => {
  const mockRows = [
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

  const mockHandleChangePage = jest.fn();
  const mockHandleChangeRowsPerPage = jest.fn();

  const renderPokemonTableList = () => {
    render(
      <BrowserRouter>
        <MockTheme>
          <DesktopPokemonTableList
            page={0}
            rowsPerPage={10}
            rows={mockRows}
            handleChangePage={mockHandleChangePage}
            handleChangeRowsPerPage={mockHandleChangeRowsPerPage}
          />
        </MockTheme>
      </BrowserRouter>
    )
  };

  beforeEach(() => renderPokemonTableList());

  it('should render the component', () => {
    expect(screen).not.toBeNull();
  });

  it('should render the elements on the screen', async () => {
    const name = await screen.findByRole('columnheader', { name: /name/i });
    const pokemonName = await screen.findByRole('cell', { name: `${mockRows[0].name}` });

    expect(name).toBeInTheDocument();
    expect(pokemonName).toBeInTheDocument();
  });
});
