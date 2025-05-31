import {createServer} from 'http';
const PORT = process.env.PORT
//create a hardcoded database called users

const users = [
    {'id': 1, 'name': 'John Doe'},
    {'id': 2, 'name': 'Jane Doe'},
    {'id': 3, 'name': 'Jim Doe'}
]

// create a server 

const Server = createServer((req, res) => {
    
})

Server.listen(PORT, ()=> {
    console.log(`the Server is running on port ${PORT}` )
})