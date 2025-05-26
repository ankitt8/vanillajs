// server.js
const http  = require('http');
const fs    = require('fs');
const path  = require('path');

const PORT = 3000;
const PUBLIC_DIR = path.join(__dirname, 'public');

const MIMETYPE = {
    '.html': 'text/html',
    '.js': 'application/javascript'
}
http.createServer((req, res) => {
  const requestedUrl = req.url === '/' ? 'index.html' : req.url;
  const filePath = path.join(PUBLIC_DIR, requestedUrl);
  const filePathExtension = path.extname(filePath).toLowerCase();

  fs.readFile(filePath, (err, data) => {
      if(data) {
        res.writeHead(200, {
              'Content-Type': MIMETYPE[filePathExtension]
          });
          res.end(data);
      }
  });

}).listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
