import { Suspense, useContext } from 'react';
import FullPageLoading from 'components/fullPageLoading/fullPageLoading';
import PokemonContext from 'context/pokemon.context';
import { FullLoadingPageWrapper } from 'shared/css/fullPageLoadingWrapper';
import PokemonCard from './pokemonCard';

const PokemonCardContainer = () => {
  const { pokemonData } = useContext(PokemonContext);

  return (

    <Suspense
      fallback={
        <FullLoadingPageWrapper>
          <FullPageLoading />
        </FullLoadingPageWrapper>
      }
    >
      <PokemonCard pokemonData={pokemonData} />
    </Suspense>
  )
};

export default PokemonCardContainer;
