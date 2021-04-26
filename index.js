// A function that accepts an array and returns the first element
module.exports = first = array => array[0]; //frontend
exports.first = array => array[0];   // backend

// A function that accepts the string form of boolean values and returns their native boolean forms
module.exports = toBoolean = string => string == "true" ? true : string == "false" ? false : null; //frontend
exports.toBoolean = string => string == "true" ? true : string == "false" ? false : null; //backend

