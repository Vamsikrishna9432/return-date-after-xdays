const addDays = require("date-fns/addDays");
function myfunction(days) {
  let result = addDays(new Date(2020, 7, 22), days);
  return `${result.getDate()}-${result.getMonth()}-${result.getFullYear()}`;
}

console.log(myfunction(4));
module.exports = myfunction;
