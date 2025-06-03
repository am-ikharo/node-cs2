import {createServer} from 'http';
import { url } from 'inspector';
const PORT = process.env.PORT || 8080
//create a hardcoded database called users

const users = [
    {'id': 1, 'name': 'John Doe'},
    {'id': 2, 'name': 'Jane Doe'},
    {'id': 3, 'name': 'Jim Doe'}
]

//handler for GET allusers
const getUserHandler = (req, res) => {
    res.write(JSON.stringify(users));
    res.end();
}

// handler for POST /api/user/

const createUserHandler = (req, res) => {
    let body = '';
    req.on('data', (chuck) => {
        body += chuck.toString();
    })
    req.on('end', () => {
            const newUser = JSON.parse(body);
            users.push(newUser);
            res.statusCode = 201;
            res.write(JSON.stringify(newUser));
            res.end();
        })
}

// create a route not found handler
const routeNotFoundhandler = (req, res) => {
    res.statusCode = 404;
    res.write(JSON.stringify({message: 'Route not found'}));
    res.end();
}

//handler for GET a user
const  getUserByIdHandler = (req, res) => {
    const id = req.url.split('/')[3];
    const user = users.filter((user) => user.id === parseInt(id))
    if(user){
        res.write(JSON.stringify(user));
    }else{
        res.write(JSON.stringify({message: "user not found"}));
        res.statusCode = 404;
    }
    res.end();
}

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
}

const jsonMiddleware = (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
}
// create a server 

const Server = createServer((req, res) => {
    logger(req, res, () => {
        jsonMiddleware (req, res, () => {
            if(req.url === '/api/users' && req.method === 'GET') {
                getUserHandler(req, res);
            }else if(req.url.match(/\/api\/user\/([0-9]+)/) && req.method === 'GET'){
                getUserByIdHandler(req, res);
            }else if (req.url === '/api/users' && req.method === 'POST'){
                createUserHandler(req, res);
            }else{
                routeNotFoundhandler(req, res);
            }
        });
    });
});

Server.listen(PORT, ()=> {
    console.log(`the Server is running on port ${PORT}` )
})