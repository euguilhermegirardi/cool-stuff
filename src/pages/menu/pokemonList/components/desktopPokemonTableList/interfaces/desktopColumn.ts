export interface Column {
  id: 'name' |
  'hp' |
  'attack' |
  'defense' |
  'specialAttack' |
  'specialDefense' |
  'speed' |
  'baseExperience'
  ;
  label: string;
  width?: number;
  align?: 'center';
};
