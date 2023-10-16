import DesktopTableList from './components/desktopPokemonTableList';
import MobileTableList from './components/mobilePokemonTableList';

const PokemonList = ({ isMobileView }: { isMobileView: boolean }) => {
  return (
    <>
      {isMobileView ? (
        <MobileTableList />
      ) : (
        <DesktopTableList />
      )}
    </>
  );
};

export default PokemonList;
