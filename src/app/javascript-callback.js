// This function will be called from app.component.ts
export function javascriptCallback() { };

// Callback functions:
// http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/
// http://callbackhell.com/
// https://medium.com/@fotios.floros/explaining-javascript-callbacks-3d5a9ad52819
// https://stackoverflow.com/questions/29933522/anonymous-callback-function-clarification
// https://www.dashingd3js.com/lessons/javascript-callback-functions

// This is the original function which will have a callback function
function callbackTester(callback) {
  console.log('\tinside callbackTester, before callback');
  callback();
}

// WITHOUT CALLBACK PARAMETER
// Anonymous callback
callbackTester(function(){console.log('inside anonymous callback')});

// Named callback, defined inside the parameter
callbackTester(function namedFunction(){console.log('inside namedFunction callback')});

// As a reference to a function declaration
// This function will be passed as the parameter to the callbackTester
function callbackWithoutParameter() {
  console.log('inside callbackWithoutParameter');
}
callbackTester(callbackWithoutParameter);

// WITH CALLBACK PARAMETER
// This function has two parameters
function callbackWithParameters(parameter1, parameter2) {
  console.log('inside callbackWithParameters, parameter1: ' + parameter1 + ' parameter2: ' + parameter2);
}
// Named and referenced callback with parameter
callbackTester(function(){callbackWithParameters("argument1", "argument2")});
// callbackTester(callbackWithParameteres); // this will not work
// callbackTester(callbackWithParameters('alma', 'korte'));  // this will not work
