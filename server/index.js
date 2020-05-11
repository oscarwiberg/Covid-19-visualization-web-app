const express = require('express');
const axios = require('axios');

const app = express();

const today = new Date();

const yesterday = new Date(today.getTime());
yesterday.setDate(today.getDate() - 1);

const dayBeforeYesterday = new Date(today.getTime());
dayBeforeYesterday.setDate(today.getDate() - 2);

// Format date to: YYYYMMDD
const formatDate = (date) => {
  let d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;
  return Number(year + month + day);
};

const dateCheck = (date) => {
  if (
    date === formatDate(yesterday) ||
    date === formatDate(dayBeforeYesterday)
  ) {
    return true;
  }
  return false;
};

const fetchCurrentDay = () => {
  return axios
    .get('https://covidtracking.com/api/v1/states/current.json') // Ska Hämta dödsantal och kalkylera senaste 3 dagarna
    .then((res) => {
      return mapCurrentDay(res.data);
    })
    .catch((err) => console.log(err));
};

const mapCurrentDay = (data) => {
  let current = [];
  data.forEach((state) => {
    let newStateObj = {
      state: state.state,
      death: state.death,
    };
    current.push(newStateObj);
  });
  current.sort((a, b) => a.state.localeCompare(b.state));
  return current;
};

const filterDataBasedOnDates = (data) => {
  let filterData = [];
  data.forEach((item) => {
    if (dateCheck(item.date)) {
      const obj = { state: item.state, death: item.death };
      filterData.push(obj);
    }
  });
  return filterData;
};

// Fetch data from yestarday and the day before yesterday
const fetchDaily = () => {
  return axios
    .get('https://covidtracking.com/api/v1/states/daily.json')
    .then((res) => {
      const { data } = res;
      return filterDataBasedOnDates(data);
    })
    .catch((err) => console.log(err));
};

// Calculate total new corona deaths during the last 3 days (current day + yesterday + the day before yesterday)

// data innehåller gårdagens och iförrgår

const calculateDeath = (mergeCurrentAndHistorical) => {
  let result = [];
  const findSum = (array, key) => {
    let sum = 0;
    array.forEach((element) => {
      if (key === element.state) {
        sum += element.death;
      }
    });
    return sum;
  };
  mergeCurrentAndHistorical.map((element) => {
    let sum = findSum(mergeCurrentAndHistorical, element.state);
    result[element.state] = { state: element.state, death: sum };
  });
  return result;
};

const calculateCovidDeath = async () => {
  const dailyArray = await fetchDaily();
  const currentArray = await fetchCurrentDay();
  // slå ihop dagens array med gårdagens + iförrgår
  const mergeCurrentAndHistorical = [...dailyArray, ...currentArray];
  const result = calculateDeath(mergeCurrentAndHistorical);
  return result;
};

app.get('/', async (req, res) => {
  const calculatedDeaths = await calculateCovidDeath();
  const calculateDeathValues = Object.values(calculatedDeaths);
  res.json(calculateDeathValues);
});

const port = 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
