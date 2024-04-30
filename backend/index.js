const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const routes = require('./routes/routes')

app.use('/data',routes)

const PORT = process.env.PORT || 3501

app.listen(PORT,()=> {
    console.log(`Server is executed! on port ${PORT}`)
})