const User = require('./classes/user');

const michelle = new User('Michelle');

function greetAfterNameChange(changeName, newName) {
  const name = changeName(newName);

  console.log(`Hi my name is ${name}`);
}
let boundMichelle = michelle.changeName.bind(michelle);
greetAfterNameChange(boundMichelle, 'Elle');
  // should print out: Hi my name is Elle
