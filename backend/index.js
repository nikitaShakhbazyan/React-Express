const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const routes = require('./routes/routes')
// const errorHandler = require('./middleware/errorHandler');

app.use(express.json())
app.use('/gifts',routes)
// app.use(errorHandler)

const PORT = process.env.PORT || 3501

app.listen(PORT,()=> {
    console.log(`Server is executed! on port ${PORT}`)
})