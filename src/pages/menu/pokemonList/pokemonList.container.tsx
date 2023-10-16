import { useMediaQuery, useTheme } from '@mui/material';
import { lazy, Suspense } from 'react';
import FullPageLoading from 'components/fullPageLoading/fullPageLoading';
import { FullLoadingPageWrapper } from 'shared/css/fullPageLoadingWrapper';

const PokemonList = lazy(() => import('./pokemonList'));

const PokemonListContainer = () => {
  const theme = useTheme();

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
      <PokemonList isMobileView={isMobileView} />
    </Suspense>
  )
};

export default PokemonListContainer;
