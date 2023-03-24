import * as dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import telegramRouter from "./routes/telergam.router";
import allRoutes from "./routes/all.router";
import indexRouter from "./routes/index.router";

const app = express()
const port = 9001
const cors = require('cors')

app.use(cors({
    credentials: true,
    origin: ['http://localhost:3000', "your_frontend_domain"]
}))

import logger from 'morgan'

app.use(logger('dev'))
app.use(express.json())

app.use('*', allRoutes)
app.use("/", indexRouter)
app.use("/telegram", telegramRouter)

app.set('json spaces', 2)
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})