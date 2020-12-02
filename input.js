let connection; 
const {MOVE_UP_KEY, MOVE_DOWN_KEY, MOVE_LEFT_KEY,MOVE_RIGTH_KEY } = require('./constants');

const handleUserInput = (key) =>{
  switch(key){
    case 'w': connection.write(MOVE_UP_KEY); break;  
    case 'a': connection.write(MOVE_LEFT_KEY); break;  
    case 's': connection.write(MOVE_DOWN_KEY); break;  
    case 'd': connection.write(MOVE_RIGTH_KEY); break;  
  }
};

const setupInput = function(conn) {
    connection = conn;
    console.log("conn connection= " + connection);

    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding('utf8');
    stdin.resume();
    stdin.on('data', (key) => {
        if(key === '\u0003'){
            process.exit();
        }
        handleUserInput(key)
    });
       
        return stdin;
    };

module.exports = {setupInput};