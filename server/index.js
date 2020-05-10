const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors({ origin: 'http://localhost:3000' }));

const fetchCurrentDay = () => {
  const data = axios
    .get('https://covidtracking.com/api/v1/states/current.json') // Ska Hämta dödsantal och kalkylera senaste 3 dagarna
    .then((res) => {
      console.log(mapCurrentDay(res.data));
    })
    .catch((err) => console.log(err));
};

fetchCurrentDay();

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

//mapCurrentDay();

const fetchDaily = () => {
  axios
    .get('https://covidtracking.com/api/v1/states/daily.json') // Ska Hämta dödsantal och kalkylera senaste 3 dagarna
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => console.log(err));
};

//fetchDaily();

const today = new Date();

const yesterday = new Date(today.getTime());
yesterday.setDate(today.getDate() - 1);

const dayBeforeYesterday = new Date(today.getTime());
dayBeforeYesterday.setDate(today.getDate() - 2);

console.log(today, yesterday, dayBeforeYesterday);

// Calculate total new corona deaths during the last 3 days (current day + yesterday + the day before yesterday)

const calculateLastThreeDays = () => {};

const port = 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
