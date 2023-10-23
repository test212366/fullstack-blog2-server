const express = require('express')
const mongoose = require('mongoose')
const config = require('config')

const authRouter = require('./routes/auth.routes')

const app = express()

const PORT = config.get('serverPort')

const corsMiddleWare = require('./middleware/cors.middleware')

app.use(express.json())
app.use(corsMiddleWare)
app.use('/api/auth', authRouter)


const start = async () => {
    try {
        await mongoose.connect(config.get('dbURL'))
        app.listen(PORT, () => {
            console.log('server stated')
        })

    }catch (e) {
        console.error(e)
    }
}
start()