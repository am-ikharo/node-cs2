import http from 'http';
const PORT = process.env.PORT;

const Server = http.createServer((req,res) => {
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
    
})

Server.listen(PORT, () => {
    console.log(PORT)
    console.log(`Your Server is running on ${PORT}`);
})