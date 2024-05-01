const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const routes = require('./routes/routes')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use('/gifts',routes)

const PORT = process.env.PORT || 3501

app.listen(PORT,()=> {
    console.log(`Server is executed! on port ${PORT}`)
})