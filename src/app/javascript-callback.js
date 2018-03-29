// This function will be called from app.component.ts
export function javascriptCallback() { };

// Callback functions:
// http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/
// http://callbackhell.com/
// https://medium.com/@fotios.floros/explaining-javascript-callbacks-3d5a9ad52819
// https://stackoverflow.com/questions/29933522/anonymous-callback-function-clarification
// https://www.dashingd3js.com/lessons/javascript-callback-functions

// This function will have a callback function
function callbackTester(callback) {
  console.log('inside callbackTester ');
  callback();
}

function callbackWithoutParameter() {
  console.log('inside callbackWithoutParameter');
}
// This will be passed as the parameter when named function is used
function callbackWithParameters(parameter1, parameter2) {
  console.log('inside callbackWithParameters, parameter1: ' + parameter1 + ' parameter2: ' + parameter2);
}

// Anonymous callback
callbackTester(function(){console.log('inside anonymous callback')});

// Named callback, defined inside the parameter
callbackTester(function namedFunction(){console.log('inside namedFunction callback')});

// As a reference to a function declaration
callbackTester(callbackWithoutParameter);

// Named and referenced callback with parameter
callbackTester(function(){callbackWithParameters("argument1", "argument2")});
