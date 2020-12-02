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
    conn.setEncoding('utf8'); 

    conn.on('connect', () => {
        console.log('Successfully connected to game server');
        conn.write("Name: SNK");
    });

    /*conn.on('connect', () => {
        setTimeout(() => {
            conn.write("Move: up"); 
        },1000);
    });
    conn.on('connect', () => {
        setTimeout(() => {
            conn.write("Move: down"); 
        },500);
    });
    /*conn.on('connect', () => {
        setTimeout(() => {
            conn.write("Move: left"); 
        },1000);
    });*/
    /*conn.on('connect', () => {
        setTimeout(() => {
            conn.write("Move: right"); 
        },1000);
    });*/

    conn.on('close', () => {
        console.log('you dead');
    });

    //setInterval(connect, 1500);
    // interpret incoming data as text
    
    return conn;
}

module.exports = {connect};