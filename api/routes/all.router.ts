import express from "express";


const allRoutes = express.Router()

allRoutes.all("*", (req, res, next) => {

    let domain = process.env.NODE_ENV === 'development' ? "http://localhost:3000" : "your_frontend_domain"

    res.setHeader('Access-Control-Allow-Origin', domain);
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
})

export default allRoutes