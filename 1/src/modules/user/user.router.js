const userCtrl = require("./user.controller")

const userRoute = require("express").Router()


userRoute.post("/create",userCtrl.create)
userRoute.get("/list",userCtrl.listUser)




module.exports = userRoute