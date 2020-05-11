import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Table, TableContainer, Paper, makeStyles } from '@material-ui/core';

import TableHeader from '../components/TableHeader';
import TableBodyComponent from '../components/TableBodyComponent';

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const TableWrapper = () => {
  const classes = useStyles();

  const [stateData, setStateData] = useState([]);
  const [stateInfo, setStateInfo] = useState([]);
  const [deathData, setDeathData] = useState([]);

  const [search, setSearch] = useState('');

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

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

  useEffect(() => {
    const getDeathData = () => {
      axios
        .get('http://localhost:5000/')
        .then((res) => {
          setDeathData(res.data);
        })
        .catch((err) => console.log(err));
    };

    getDeathData();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table}>
        <TableHeader />
        <TableBodyComponent
          stateData={stateData}
          stateInfo={stateInfo}
          deathData={deathData}
        />
      </Table>
    </TableContainer>
  );
};

export default TableWrapper;
