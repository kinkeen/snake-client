let connection; 
let key;

const handleUserInput = (key,conn) =>{

    //console.log("key befor handleUserInput= " + key);
    //console.log("conn befor connection= " + connection);

    switch(key){
        //case '\u0003': process.exit(); break;  //ctrl+c
        case 'w': conn.on('connect', () => conn.write('Move: up')); break;  
        case 'a': conn.on('connect', () => conn.write('Move: left')); break;  
        case 's': conn.on('connect', () => conn.write('Move: down')); break;  
        case 'd': conn.on('connect', () => conn.write('Move: right')); break;  
    }

    /*if (key === 'w'){

        //var myVar = setInterval(function(){ displayTimer() }, 500);

        conn.on('connect', () => {
            //setTimeout(() => {
                conn.write("Move: up"); 
            //},50);
        });
    }
    conn.on('connect', () => {
        setTimeout(() => {
            conn.write("Move: down"); 
        },500);
    });
    conn.on('connect', () => {
        setTimeout(() => {
            conn.write("Move: left"); 
        },1000);
    });
    conn.on('connect', () => {
        setTimeout(() => {
            conn.write("Move: right"); 
        },1000);
    });*/

};

const setupInput = function(conn) {
    connection = conn;
    //console.log("key handleUserInput= " + key);
    console.log("conn connection= " + connection);

    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding('utf8');
    stdin.resume();

    stdin.on('data', (key) => {
        if(key === '\u0003'){
          process.exit();
        }else{
            //setInterval(function(){ handleUserInput(key,connection)}, 10000);
            handleUserInput(key,connection);
        }
        return stdin;
    });
}


module.exports = {setupInput};