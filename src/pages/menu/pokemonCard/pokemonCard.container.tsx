import { Suspense } from 'react';
import FullPageLoading from 'components/fullPageLoading/fullPageLoading';
import { FullLoadingPageWrapper } from 'shared/css/fullPageLoadingWrapper';
import PokemonCard from './pokemonCard';

const PokemonCardContainer = () => {
  return (

    <Suspense
      fallback={
        <FullLoadingPageWrapper>
          <FullPageLoading />
        </FullLoadingPageWrapper>
      }
    >
      <PokemonCard />
    </Suspense>
  )
};

export default PokemonCardContainer;
