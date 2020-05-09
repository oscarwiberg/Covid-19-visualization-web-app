import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import TableHeader from '../components/TableHeader';
import TableBodyComponent from '../components/TableBodyComponent';
import axios from 'axios';

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const TableWrapper = () => {
  const classes = useStyles();
  const [stateData, setStateData] = useState([]);
  const [stateInfo, setStateInfo] = useState([]);

  useEffect(() => {
    const getStateData = () => {
      axios
        .get('https://covidtracking.com/api/v1/states/current.json')
        .then((res) => {
          setStateData(res.data);
        })
        .catch((err) => console.log(err));
    };

    getStateData();
  }, []);

  useEffect(() => {
    const getStateInfo = () => {
      axios
        .get('https://covidtracking.com/api/v1/states/info.json')
        .then((res) => {
          setStateInfo(res.data);
        })
        .catch((err) => console.log(err));
    };

    getStateInfo();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table}>
        {/*size="small" on the container?*/}
        <TableHeader />
        <TableBodyComponent stateData={stateData} stateInfo={stateInfo} />
      </Table>
    </TableContainer>
  );
};

export default TableWrapper;
