const express = require('express')
const mongoose = require('mongoose');
const app = express()
const port = process.env.PORT

app.use(express.json())

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})