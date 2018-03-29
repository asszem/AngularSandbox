// This function will be called from app.component.ts
export function javascriptSandbox() {}

// Callback functions:
// http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/
// http://callbackhell.com/

function first(stringParameter, callbackFunction) {
  // Simulate a code delay and execute 'callbackForFirst when the delay is completed
  console.log("First function called");
  setTimeout(thisIsACallback, 2000);
  console.log("First function completed");
  callbackFunction('a','b');
}
function thisIsACallback() {
  console.log("thisIsACallback completed");
}
function second() {
  console.log("Second function called");
  console.log("Second function completed");
}
function callbackFunction(parmeter1, parameter2) {
  console.log("callbackFunction completed");
}

first();
second();
