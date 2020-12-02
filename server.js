
//const { Server } = require('http');
Server.on('connection', (client) => {
  console.log('new client connected!');
  client.write('hello there !');
  client.setEncoding('utf8'); 
  client.on('data', (data)=>{
    console.log('Message from client:', data)
  });
});