import { useCreateReducer } from 'hooks/useCreateReducer';
import { MobilePokemonTableListContainerProps } from './interfaces/mobilePokemonTableListContainer';
import MobilePokemonTableList from './mobilePokemonTableList';
import { initialMobilePokemonTableListState } from './mobilePokemonTableList.state';

const MobilePokemonTableListContainer = ({
  isLoading,
  pokemonData,
}: MobilePokemonTableListContainerProps) => {
  const {
    state: {
      openMobileDrawer,
    },
    dispatch
  } = useCreateReducer({
    initialState: initialMobilePokemonTableListState
  });

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
      isLoading={isLoading}
      isDrawerOpen={openMobileDrawer.isOpen}
      selectedPokemon={openMobileDrawer.selectedPokemon}
      pokemonData={pokemonData}
      toggleDrawer={toggleDrawer}
    />
  );
};

export default MobilePokemonTableListContainer;
