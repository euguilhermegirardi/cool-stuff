export interface DesktopPokemonTableListProps {
  page: number;
  rowsPerPage: number;
  rows: any;
  handleChangePage: (event: unknown, newPage: number) => void;
  handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
