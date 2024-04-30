const express = require('express')
const app = express()
const dotenv = require('dotenv').config()

const PORT = process.env.PORT || 3501

app.listen(PORT,()=> {
    console.log(`Server is executed! on port ${PORT}`)
})