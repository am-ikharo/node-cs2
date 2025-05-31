import http from 'http';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';
const PORT = process.env.PORT;


const __fileName = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__fileName);

const Server = http.createServer(async (req,res) => {
    if(req.method === 'GET'){
        let filepath;
        if(req.url === '/'){
            filepath = path.join(__dirname, 'public', 'index.html');
        }else if(req.url === '/about'){
            filepath = path.join(__dirname, 'public', 'about.html');
        }else{
            throw new Error('Not Found');
        }

        const data = await fs.readFile(filepath)
        res.setHeader('Content-Type', 'text/html');
        res.write(data);
        res.end();
    }else{
        throw new Error('Method not found');
    }
    

    
})

Server.listen(PORT, () => {
    console.log(PORT)
    console.log(`Your Server is running on ${PORT}`);
})