//const { Server } = require('http');
const net= require('net');
/*
establish connection with the game server
*/

const connect = function() {
    const conn = net.createConnection({ 
        host: 'localhost',
        port: 50541
    });

    // interpret incoming data as text
    conn.setEncoding('utf8'); 
    return conn;
}

module.exports = {connect};

/*conn.on('connect', () => {
    conn.write("Name: Piksi"");
    console.log('Successfully connection..')

});*/

/*conn.on('close', () => {
    conn.write("Name: Piksi"");
    console.log('you ded')

});*/
  