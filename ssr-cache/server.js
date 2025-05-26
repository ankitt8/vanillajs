// server.js
const http  = require('http');
const fs    = require('fs');
const path  = require('path');

const PORT = 3000;
const PUBLIC_DIR = path.join(__dirname, 'public');

http.createServer((req, res) => {
  // Default to index.html

  const filePath = path.join(PUBLIC_DIR, 'index.html');
  fs.readFile(filePath, (err, data) => {
  if(data) {
    res.writeHead(200, {
          'Content-Type': 'text/html'
      });
      res.end(data);
  }

  });

}).listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
