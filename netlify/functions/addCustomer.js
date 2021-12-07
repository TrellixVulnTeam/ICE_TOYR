const axios = require("axios");

exports.handler = async function (event, context) {

  // Only allow POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  console.log('hit my netlify JSON.stringify(event.body)');
  return axios({
    method: "POST",
    url: "https://staging.zuperpro.com/api/customers",
    headers: {
      "content-type": "application/json",
      "x-api-key": process.env.ZUPERPRO,
    },
    data: event.body,
  }).then(() => {
    return {
      statusCode: 200,
      body: `Hello! Your customer has been added to ZuperPro!`
    }
  }).catch((e) => {
    console.log('got an error', e.message);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: e.message
      })
    }
  });
};