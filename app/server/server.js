require('dotenv').config();

const http = require('http');
const port = 3000;

const requestHandler = (request, response) => {  
  console.log(request.url);
  response.end('Starting web server');
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {  
  if (err) {
    return console.log('An error has occured', err);
  }

  console.log(`server is listening on ${port}`);
})
