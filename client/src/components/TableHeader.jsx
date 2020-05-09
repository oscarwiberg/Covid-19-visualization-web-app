import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

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
        <StyledTableCell>State</StyledTableCell>
        <StyledTableCell align="center">
          The amount of currently hospitalized corona patients per US state
        </StyledTableCell>
        <StyledTableCell align="right">
          Total new corona deaths during the last 3 days
        </StyledTableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
