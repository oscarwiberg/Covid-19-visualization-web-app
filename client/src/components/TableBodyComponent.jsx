import React from 'react';
import { withStyles, TableRow, TableBody, TableCell } from '@material-ui/core';

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

const TableBodyComponent = ({ stateData, stateInfo, deathData }) => {
  const stateNames = stateInfo.map((data) => data.name);
  const stateShort = stateInfo.map((data) => data.state);
  const deathDataThreeDays = deathData.map((data) => data.death);

  return (
    <TableBody>
      {stateData.map((data, index) => (
        <StyledTableRow key={data.state}>
          <StyledTableCell align="center" component="th" scope="row">
            {stateNames[index] + ' ' + '(' + stateShort[index] + ')'}
          </StyledTableCell>
          <StyledTableCell align="center">
            {data.hospitalized ? data.hospitalized : 0}
          </StyledTableCell>
          <StyledTableCell align="center">
            {deathDataThreeDays[index] ? deathDataThreeDays[index] : 0}
          </StyledTableCell>
        </StyledTableRow>
      ))}
    </TableBody>
  );
};

export default TableBodyComponent;
