import { useMediaQuery, useTheme } from '@mui/material';
import { Suspense, useContext } from 'react';
import FullPageLoading from 'components/fullPageLoading/fullPageLoading';
import PokemonContext from 'context/pokemon.context';
import { useCreateReducer } from 'hooks/useCreateReducer';
import { FullLoadingPageWrapper } from 'shared/css/fullPageLoadingWrapper';
import PokemonList from './pokemonList';
import { initialPokemonListState } from './pokemonList.state';

const PokemonListContainer = () => {
  const {
    state: {
      openMobileDrawer,
    },
    dispatch
  } = useCreateReducer({
    initialState: initialPokemonListState
  });

  const theme = useTheme();
  const { isLoading, pokemonData } = useContext(PokemonContext);

  const isMobileView = useMediaQuery(theme.breakpoints.down('sm'), {
    noSsr: true,
  });

  const handleOpenMobileDrawer = (id: number) => {
    dispatch({
      type: 'change',
      field: 'openMobileDrawer',
      value: {
        isOpen: !openMobileDrawer,
        selectedPokemon: pokemonData.find((pokemon: any) => { return pokemon.id === id })
      }
    });
  };

  return (
    <Suspense
      fallback={
        <FullLoadingPageWrapper>
          <FullPageLoading />
        </FullLoadingPageWrapper>
      }
    >
      <PokemonList
        isMobileView={isMobileView}
        isLoading={isLoading}
        isDrawerOpen={openMobileDrawer.isOpen}
        selectedPokemon={openMobileDrawer.selectedPokemon}
        pokemonData={pokemonData}
        handleOpenMobileDrawer={handleOpenMobileDrawer}
      />
    </Suspense>
  )
};

export default PokemonListContainer;
