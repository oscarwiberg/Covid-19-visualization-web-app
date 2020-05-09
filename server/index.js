const express = require('express');
const axios = require('axios');
//const cors = require('cors');

const app = express();
//app.use(cors());

axios
  .get('https://covidtracking.com/api/v1/states/current.json') // Ska Hämta dödsantal och kalylera senaste 3 dagarna
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => console.log(err));

const port = 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
