const express = require('express');
const router = express();
const axios = require('axios');

router.get('/', (req, res) => {
  console.log('in my GET router for customer');
  axios({
    method: 'GET',
    url: "https://staging.zuperpro.com/api/customers?&page=1&count=10",
    headers: { "x-api-key": process.env.ZUPERPRO },
  })
    .then(response => {
      console.log('got a response from my GET', response.data);
      res.send(response.data);
    })
    .catch(error => {
      console.log('error in GETting', error);
      res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
  console.log('in my post with req.body', req.body);
  axios({
    method: 'POST',
    url: "https://staging.zuperpro.com/api/customers",
    headers: { "x-api-key": process.env.ZUPERPRO },
    data: req.body
  })
    .then(() => {
      console.log('got a response from my POST');
      res.sendStatus(201);
    })
    .catch(error => {
      console.log('error in POSTing', error);
      res.sendStatus(500);
    });
});

module.exports = router;