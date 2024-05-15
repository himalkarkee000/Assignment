const blogCtrl = require("./blogs.controller")

const blogRoute = require("express").Router()


blogRoute.post("/newBlogs",blogCtrl.newBlogs)
blogRoute.get("/allblogs",blogCtrl.allBlogs)
blogRoute.get("/:id",blogCtrl.blogById)
blogRoute.post("/updateblogs",blogCtrl.updateBlog)





module.exports = blogRoute