

const IP = 'localhost';
const PORT = 50541;
const MOVE_UP_KEY = 'Move: up';
const MOVE_DOWN_KEY = 'Move: down';
const MOVE_LEFT_KEY = 'Move: left';
const MOVE_RIGTH_KEY = 'Move: right'

module.exports = {
    IP,
    PORT,
    MOVE_UP_KEY, 
    MOVE_DOWN_KEY,
    MOVE_LEFT_KEY,
    MOVE_RIGTH_KEY
};

  /*
What about our key mappings for messages, as well?
Every time a user presses the key 'x', it displays the message 'y'
This seems like a mapping that's perfect for an object ({ x: "y" })
Instead of using if statements to implement this, we can define an object (as a constant) which defines these message mappings. 
Our logic would change to simply lookup the appropriate mapping in the object, and if found, send the value as the message string
  */