import { Suspense } from 'react';
import FullPageLoading from 'components/fullPageLoading/fullPageLoading';
import { FullLoadingPageWrapper } from 'shared/css/fullPageLoadingWrapper';
import AddCustomPokemon from './addCustomPokemon';

const AddCustomPokemonContainer = () => {
  return (
    <Suspense
      fallback={
        <FullLoadingPageWrapper>
          <FullPageLoading />
        </FullLoadingPageWrapper>
      }
    >
      <AddCustomPokemon />
    </Suspense>
  );
};

export default AddCustomPokemonContainer;
