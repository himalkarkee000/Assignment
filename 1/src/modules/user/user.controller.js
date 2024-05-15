class UserController {
    create=(req,res,next) =>{
        res.json({
            result :"sucess",
            message :"This is create section",
            meta:null
        })
    }
    listUser =(req,res,next)=>{
        res.json({
            result :"sucess",
            message :"This is list all user section",
            meta:null
        })
    }
    
}
const userCtrl = new UserController();
module.exports = userCtrl;