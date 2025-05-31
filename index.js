import http from 'http';
import fs from 'fs|promises';
import url from 'url';
const PORT = process.env.PORT;

const Server = http.createServer((req,res) => {
    try {
        if(req.method === 'GET'){
            if(req.url === '/'){
                res.setHeader('Content-Type', 'text/html');
                res.end('<h1>Home Page</h1>');
            }else if(req.url === '/about'){
                res.setHeader('Content-Type', 'text/html');
                res.end('<h1>About Page</h1>');
            }else{
                res.setHeader('Content-Type', 'text/plain');
                res.statusCode = 404;
                res.end('Page not Found');
            }
        }else{
            throw new Error('Method not found');
        }
        
    } catch (error) {
        res.setHeader('Content-Type', 'text/plain');
        res.statusCode = 500;
        res.end('Server Error');
    }
    
    
})

Server.listen(PORT, () => {
    console.log(PORT)
    console.log(`Your Server is running on ${PORT}`);
})