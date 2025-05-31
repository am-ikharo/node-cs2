import http from 'http'

const Server = http.createServer((req,res) => {
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello World</h1>')
})

Server.listen(8080, () => {
    console.log('waitThe Server is running')
})