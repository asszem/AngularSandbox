import { Component, OnInit } from '@angular/core';
import { Phone } from '../Phone';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})
export class SandboxComponent implements OnInit {
  private counter = 0; // let keyword is not allowed to be used inside a class
  private secretCounter: number;
  constructor() {
    console.log('Constructor called');
  }

  ngOnInit() {}
  // Name    return type
  greet(): string {
    console.log('Greet() method called: ' + this.counter++);
    const greetings = 'Hello World!';
    return greetings;
  }
}
// These statements are OUTSIDE of the SandboxComponent class... not like in Java, here this is possible
function add(x: number, y: number): number {
  return x + y;
}

const myAdd = function(x: number, y: number): number {
  return x + y;
};
const aPhoneObject: Phone = new Phone();
let aNumber = 42; // Will not be displayed in the html using {{aNumber}} reference

console.log('myAdd result: ' + myAdd(1, 2));
console.log('function add result: ' + add(2, 2));
console.log('A number ' + aNumber + ' incremented to ' + aNumber++);
console.log(
  'Phone type: ' +
    aPhoneObject.phoneType +
    ' Phone number: ' +
    aPhoneObject.phoneNumber
);
