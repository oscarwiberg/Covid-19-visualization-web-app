import React from 'react';
import { withStyles, TableRow, TableHead, TableCell } from '@material-ui/core';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
}))(TableCell);

const TableHeader = () => {
  return (
    <TableHead>
      <TableRow>
        <StyledTableCell align="center">State</StyledTableCell>
        <StyledTableCell align="center">
          The amount of currently hospitalized corona patients per US state
        </StyledTableCell>
        <StyledTableCell align="center">
          Total new corona deaths during the last 3 days
        </StyledTableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
