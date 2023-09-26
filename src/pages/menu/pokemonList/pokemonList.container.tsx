import { useMediaQuery, useTheme } from '@mui/material';
import { Suspense, useContext } from 'react';
import FullPageLoading from 'components/fullPageLoading/fullPageLoading';
import PokemonContext from 'context/pokemon.context';
import { FullLoadingPageWrapper } from 'shared/css/fullPageLoadingWrapper';
import PokemonList from './pokemonList';

const PokemonListContainer = () => {
  const theme = useTheme();
  const { isLoading, pokemonData } = useContext(PokemonContext);

  const isMobileView = useMediaQuery(theme.breakpoints.down('sm'), {
    noSsr: true,
  });

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
        pokemonData={pokemonData}
      />
    </Suspense>
  )
};

export default PokemonListContainer;
