const userRoutes = require('./src/routes/userRoutes')

const testRoute = require('./src/routes/testRoute')

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', testRoute)
app.use('/api/users', userRoutes)



app.get('/', (req, res) => {
    res.send("Server Running")
})

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("Database Connected"))
.catch(err => console.log(err))

app.listen(5000, () => {
    console.log("Server running on port 5000")
})
