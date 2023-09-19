import { Suspense } from 'react';
import FullPageLoading from 'components/fullPageLoading/fullPageLoading';
import { FullLoadingPageWrapper } from 'shared/css/fullPageLoadingWrapper';
import PokemonList from './pokemonList';

const PokemonListContainer = () => {
  return (
    <Suspense
      fallback={
        <FullLoadingPageWrapper>
          <FullPageLoading />
        </FullLoadingPageWrapper>
      }
    >
      <PokemonList />
    </Suspense>
  )
};

export default PokemonListContainer;
