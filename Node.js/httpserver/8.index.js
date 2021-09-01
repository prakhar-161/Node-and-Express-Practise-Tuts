//Creating a server and Routing

//The http.createServer() method includes request and response parameters which is supplied by node.js.

//The request object can be used to get information about the current HTTP Request.
//e.g. url, request header and data.

//The response object can be used to send a response for a current HTTP request.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {
    // console.log(req.url);

    if(req.url === '/'){
        res.end('hello people');
    }
    else if(req.url === '/about'){
        res.end('about us page');
    }
    else if(req.url === '/contact'){
        res.end('contact us at the given mobile no.');
    }
    else if(req.url === '/userapi'){
            res.end('userapi data');
    }
    else{
        res.writeHead(404,{"Content-type" : "text/html"});
        res.end("<h1>Error 404. Page doesn't exist!</h1>");
    }
});

server.listen(3000,'localhost',() => {
    console.log('Listening to port 3000');
});
