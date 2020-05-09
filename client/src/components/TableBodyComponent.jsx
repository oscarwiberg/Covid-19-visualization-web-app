import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const StyledTableCell = withStyles(() => ({
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const TableBodyComponent = ({ stateData, stateInfo }) => {
  const stateNames = stateInfo.map((data) => data.name);

  return (
    <TableBody>
      {stateData.map((data, index) => (
        <StyledTableRow key={data.state}>
          <StyledTableCell align="center" component="th" scope="row">
            {stateNames[index]}
          </StyledTableCell>
          <StyledTableCell align="center">
            {data.hospitalized ? data.hospitalized : 0}
          </StyledTableCell>
          <StyledTableCell align="center">
            {data.hospitalized ? data.hospitalized : 0}
          </StyledTableCell>
          {/* "Total new corona deaths during the last 3 days above" */}
        </StyledTableRow>
      ))}
    </TableBody>
  );
};

export default TableBodyComponent;
