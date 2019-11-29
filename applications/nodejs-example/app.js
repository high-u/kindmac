'use strict'
const express = require('express')
const axios = require('axios')

const app = express()
app.get('/', (req, res) => {
  axios.get('https://www.google.com/')
    .then((response) => {
      res.send(`${response.status}`)
    })
    .catch(function (error) {
      console.log(error)
    })
    .finally(function () {
    })
})
app.listen(3000, () => console.log(`Example app listening on port 3000 !`))
