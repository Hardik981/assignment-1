const fs = require('fs');

function File(req, res) {
    let body = []
    req.on('data', (chunk) => {
        body.push(chunk)
    })
    req.on('end', () => {
        fs.writeFile('file.txt', "Hello", () => {
            res.statusCode = 302;
            res.setHeader('Content-Type', 'text/plain');
            res.end('File Created');
        })
    })
}
module.exports = File;