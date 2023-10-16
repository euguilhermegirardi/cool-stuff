import { Column } from '../interfaces/desktopColumn';

export const columns: readonly Column[] = [
  {
    id: 'name',
    label: 'Name',
    width: 170
  },
  {
    id: 'hp',
    label: 'HP',
    width: 10
  },
  {
    id: 'attack',
    label: 'Attack',
    width: 10,
    align: 'center',
  },
  {
    id: 'defense',
    label: 'Defense',
    width: 10,
    align: 'center',
  },
  {
    id: 'specialAttack',
    label: 'Special Attack',
    width: 10,
    align: 'center',
  },
  {
    id: 'specialDefense',
    label: 'Special Defense',
    width: 10,
    align: 'center',
  },
  {
    id: 'speed',
    label: 'Speed',
    width: 10,
    align: 'center',
  },
  {
    id: 'baseExperience',
    label: 'Base Experience',
    width: 10,
    align: 'center',
  },
];
