import { useContext } from 'react';
import PokemonContext from 'context/pokemon.context';
import { useCreateReducer } from 'hooks/useCreateReducer';
import MobilePokemonTableList from './mobilePokemonTableList';
import { initialMobilePokemonTableListState } from './mobilePokemonTableList.state';

const MobilePokemonTableListContainer = () => {
  const {
    state: {
      openMobileDrawer,
    },
    dispatch
  } = useCreateReducer({
    initialState: initialMobilePokemonTableListState
  });

  const { pokemonData } = useContext(PokemonContext);

  const toggleDrawer = (id?: number) => {
    dispatch({
      type: 'change',
      field: 'openMobileDrawer',
      value: {
        isOpen: !openMobileDrawer.isOpen,
        selectedPokemon: openMobileDrawer.isOpen ? [] :
          pokemonData.find((pokemon: any) => { return pokemon.id === id })
      }
    });
  };

  return (
    <MobilePokemonTableList
      isDrawerOpen={openMobileDrawer.isOpen}
      selectedPokemon={openMobileDrawer.selectedPokemon}
      pokemonData={pokemonData}
      toggleDrawer={toggleDrawer}
    />
  );
};

export default MobilePokemonTableListContainer;
