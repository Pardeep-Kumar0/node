const http = require("http");
const fs = require("fs");

const home = fs.readFileSync("./index.html", "utf-8")


const Port = process.env.PORT;

const server =http.createServer((req, res) =>{
    if(req.url ==="/home" || req.url ==="/"){
        return res.end (home)
    }
    if(req.url ==="/about"){
        return res.end ("about")
    }
    if(req.url ==="/contact"){
        return res.end ("contact")
    }
    if(req.url ==="/service"){
        return res.end ("service")
    }else{
        res.writeHead(404, {"Content-type": "text/html"})
        res.end("<h1>404 not found</h1>")
    
    }

})


server.listen(PORT, () =>{
    console.log(`server is working`)
})

