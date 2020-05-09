const express = require('express');
const axios = require('axios');
//const cors = require('cors');

const app = express();
//app.use(cors());

axios
  .get('https://covidtracking.com/api/v1/states/current.json') // Ska Hämta dödsantal och kalylera senaste 3 dagarna
  .then((res) => {
    //console.log(res.data);
  })
  .catch((err) => console.log(err));

const today = new Date();

const yesterday = new Date(today.getTime());
yesterday.setDate(today.getDate() - 1);

const dayBeforeYesterday = new Date(today.getTime());
dayBeforeYesterday.setDate(today.getDate() - 2);

console.log(today, yesterday, dayBeforeYesterday);

const port = 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
