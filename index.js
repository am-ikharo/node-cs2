import http from 'http';
const PORT = process.env.PORT;

const Server = http.createServer((req,res) => {
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello Worldddddddd</h1>');
})

Server.listen(PORT, () => {
    console.log(PORT)
    console.log(`Your Server is running on ${PORT}`);
})