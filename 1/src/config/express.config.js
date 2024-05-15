const express = require("express");

const mainRoute = require("./routing.config");
const app = express()
const helmet = require("helmet")
const cors = require("cors")


app.use(helmet())
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))
app.use(mainRoute)

app.use((req,res,next)=>{
    next({code:404, message: "Not Found"})
})

app.use((error,req,res,next)=>{
    const code = error.code|| 500;
    const msg = error.message||"Server Not found";
    const data = error.data

    res.status(code).json({
        result : data,
        message:msg,
        meta: null
    })
})


module.exports = app