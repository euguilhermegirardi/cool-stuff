export interface PokemonCardProps {
  id: number;
  name: string;
  base_stat: string;
  sprite: string;
  types: [
    {
      type: {
        name: string
      }
    },
  ];
  height: string,
  width: string,
  moves: [
    {
      move: {
        name: string
      }
    }
  ];
  abilities: [
    {
      ability: {
        name: string
      }
    }
  ];
};
