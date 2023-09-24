import { useEffect, useState } from 'react';
import axios from 'axios';

const baseURL = 'https://pokeapi.co/api/v2/pokemon/?limit=151';

export const useFetchAllPokemon = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [pokemonData, setPokemonData] = useState<any>([]);

  const handleFetchPokemon = (url: string) => {
    setIsLoading(true);

    axios.get(url)
      .then(async (pokemonList: any) => {
        return pokemonList.data.results;
      })
      .then((pokemonList) => {
        return Promise.all(pokemonList.map((pokemon: any) => axios.get(pokemon.url)))
      })
      .then((allPokemonData: any) => {
        setPokemonData(allPokemonData.map((pokemon: any) => pokemon.data))
      })
      .catch((error: any) => {
        console.log(error);
        setIsLoading(false);
      })
      .finally(() => {
        setIsLoading(false);
      })
  };

  useEffect(() => { handleFetchPokemon(baseURL) }, []);

  return { isLoading, pokemonData }
};
