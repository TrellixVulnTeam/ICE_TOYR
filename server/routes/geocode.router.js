const express = require('express');
const router = express();
const axios = require('axios');

router.get('/', (req, res) => {
  console.log('in my GET router for geocode');
  let houseNumber = req.query.houseNumber;
  let street = req.query.street;
  let streetType = req.query.streetType;
  let city = req.query.city;
  let state = req.query.state;



  // url: `https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=${process.env.EMBED_GOOGLE_API_KEY}`,
  axios({
    method: 'GET',
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${houseNumber}+${street}+${streetType},+${city},+${state}&key=${process.env.EMBED_GOOGLE_API_KEY}`,
  })
    .then(response => {
      console.log('got a response from my GET in geocode router');
      res.send(response.data);
    })
    .catch(error => {
      console.log('error GETting geocode', error);
      res.sendStatus(500);
    });
});

module.exports = router;