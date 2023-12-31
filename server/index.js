require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const PORT = process.env.PORT
const cors = require('cors')
const router = require('./routes/index')
const errorHandler = require('./middleWare/errorHandlingMiddleware')

const  app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)

// обработка ошибок, последний middleware
app.use(errorHandler)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server is started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()