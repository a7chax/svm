const http = require('http');
const { exec } = require('child_process');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        exec('python3 index.py', (error, stdout, stderr) => {
            if (error) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'text/plain');
                res.end(`Error: ${error.message}`);
                return;
            }
            if (stderr) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'text/plain');
                res.end(`Stderr: ${stderr}`);
                return;
            }
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end(`Stdout: ${stdout}`);
        });
    } else {
        res.statusCode = 405;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Method Not Allowed');
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});