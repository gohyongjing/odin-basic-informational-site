const http = require('http');
const fs = require('fs');

function main() {
  try {
    const home = fs.readFileSync("index.html");
    const about = fs.readFileSync("about.html");
    const contact_me = fs.readFileSync("contact-me.html");
    const not_found = fs.readFileSync("404.html");

    const hostname = '127.0.0.1';
    const port = 3000;

    const server = http.createServer((req, res) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      if (req.url === "/") {
        res.write(home);
      } else if (req.url === '/about') {
        res.write(about);
      } else if (req.url === '/contact-me') {
        res.write(contact_me);
      } else {
        res.statusCode = 404;
        res.write(not_found);
      }
      res.end();
    });

    server.listen(port, hostname, () => {
      console.log(`Server running at http://${hostname}:${port}/`);
    });
    
  } catch (err) {
    console.log(err);
  }
}

main();