let data = require("../data/data")
class BlogController{
    newBlogs = async(req,res,next)=>{
        try{
            const { title, description, category } = req.body;

      if (!req.body.id) {
        next({ message: "Id is already generated" });
      } else {
        const newBlog = { id: data.length + 1, title, description, category };
        data.push(newBlog);
        res.json({
          result: data,
          message: "New blog posted succesfully  ",
          meta: null,
        });
      }

        } catch(exception){
            next(exception)
        }
    }
    blogById = (req, res, next) => {
        try {
          const payload = data;
    
          const blog = payload.find((blog) => blog.id == req.params.id);
          if (!blog) {
            next({ code: 404, message: "No blogs found" });
          } else {
            res.json({
              result: blog,
              message: "Blog with this id found",
              meta: null,
            });
          }
        } catch (exception) {
          next(exception);
        }
      };
      allBlogs = (req, res, next) => {
        try {
          const payload = data;
    
          res.json({
            result: payload,
            message: "All blogs shown",
            meta: null,
          });
        } catch (exception) {
          next(exception);
        }
      };
      updateBlog = (req, res, next) => {
        try {
          const { id, title, description, category } = req.body;
    
          const found = data.find((blog) => blog.id == id);
          if (!found) {
            next({
              code: 404,
              message: "Blog Id not found",
            });
          } else {
            const index = data.findIndex((blog) => blog.id == id);
            data[index].title = title;
            data[index].description = description;
            data[index].category = category;
            res.json({
              result: data,
              message: "Updated Succesfully",
              meta: null,
            });
          }
        } catch (exception) {
          next(exception);
        }
      };
}

const blogCtrl = new BlogController()
module.exports = blogCtrl