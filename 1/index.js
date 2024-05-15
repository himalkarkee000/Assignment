const http = require('http')
const app = require('./src/config/express.config')
const server = http.createServer(app)



server.listen(9007,"127.0.0.1",(err)=>{
    console.log("Server is running in port 9007")
})