
const net= require('net');
const { connect } = require('./client');
const { setupInput } = require('./input');
console.log('Connecting ...');

let conn = connect();
console.log("conn in play" + conn);

setupInput(conn);
