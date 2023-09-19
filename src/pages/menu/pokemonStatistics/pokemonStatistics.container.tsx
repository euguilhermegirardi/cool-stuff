import { Suspense } from 'react';
import FullPageLoading from 'components/fullPageLoading/fullPageLoading';
import { FullLoadingPageWrapper } from 'shared/css/fullPageLoadingWrapper';
import PokemonStatistics from './pokemonStatistics';

const PokemonStatisticsContainer = () => {
  return (
    <Suspense
      fallback={
        <FullLoadingPageWrapper>
          <FullPageLoading />
        </FullLoadingPageWrapper>
      }
    >
      <PokemonStatistics />
    </Suspense>
  )
};

export default PokemonStatisticsContainer;
