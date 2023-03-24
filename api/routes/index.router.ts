import express from "express"

const indexRouter = express.Router()

indexRouter.get('/', (req, res) => {
    res.json({ok: true})
})

export default indexRouter