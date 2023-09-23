import { useEffect, useState } from 'react';
import axios from 'axios';

const baseURL = 'https://pokeapi.co/api/v2/';

export const useFetchAllPokemon = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [pokemonData, setPokemonData] = useState<any>([]);

  useEffect(() => {
    setIsLoading(true);

    axios.get(`${baseURL}pokemon/?limit=151`)
      .then(async (response: any) => {
        const allPokemonData: [] = response.data.results;
        let pokemonData: any = [];

        if (!allPokemonData) return;

        allPokemonData.map(async (pokemon: any) => {
          await axios.get(pokemon.url)
            .then((response) => {
              pokemonData.push(response.data)
            })
            .catch((error) => {
              console.log(error);
              setIsLoading(false);
            })
            .finally(() => {
              setPokemonData(pokemonData);
              setIsLoading(false);
            })
        });
      })
      .catch((error: any) => {
        console.log(error);
        setIsLoading(false);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }, []);

  return { isLoading, pokemonData }
};
