//const { Server } = require('http');
const net= require('net');
const { IP, PORT} = require('./constants');
/*
establish connection with the game server
*/
const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  
  conn.setEncoding('utf8'); 
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write("Name: SNK");
    conn.write("Say: I'm going to win you :]");
  });
  conn.on('close', () => {
    console.log('you dead');
  });
  return conn;
}
module.exports = {connect};