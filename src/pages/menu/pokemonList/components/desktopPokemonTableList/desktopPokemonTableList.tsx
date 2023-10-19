import { TableRow } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import { DesktopPokemonTableListProps } from './interfaces/desktopPokemonTableListProps';
import { TRow } from './types/tableRow';
import { columns } from './utils/columns';

const DesktopPokemonTableList = ({
  page,
  rowsPerPage,
  rows,
  handleChangePage,
  handleChangeRowsPerPage,
}: DesktopPokemonTableListProps) => {
  return (
    <Paper
      sx={{
        mt: 14.2,
        width: '100%',
        overflowX: 'auto'
      }}
    >
      <Table sx={{ minWidth: 700 }}>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.id}
                align={column.align}
                style={{ minWidth: column.width }}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {rows
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row: TRow) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.name}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
        </TableBody>

      </Table>

      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default DesktopPokemonTableList;
