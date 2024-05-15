const blogRoute = require("../modules/blogs/blogs.router")
const userRoute = require("../modules/user/user.router")

const mainRoute = require("express").Router()


mainRoute.use("/user",userRoute)
mainRoute.use("/blog",blogRoute)



module.exports = mainRoute