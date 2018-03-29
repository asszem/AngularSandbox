import { Component, OnInit } from '@angular/core';
import { Phone } from '../phone'; // Make sure this is exactly the same as the filename, case-sensitive!

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})
export class SandboxComponent implements OnInit {
  private counter = 0; // let keyword is not allowed to be used inside a class
  private secretCounter: number;
  sandboxPhone: Phone = new Phone();
  aNumber = 42;
  imageAddress = 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png';
  constructor() {
  }

  ngOnInit() {}

  // The return of this function will be displayed in {{displayPhone}} Angular Expression
  displayPhone(): string {
    this.sandboxPhone.setPhoneType('Pixel2');
    // this.sandboxPhone.phoneType = 'alma';
    // console.log(
    //   'Phone type in displayPhone method set to ' + this.sandboxPhone.phoneType
    // );
    this.sandboxPhone.phoneNumber = 123456; // non-private field accessed directly
    // console.log(
    //   'Phone number in displayPhone method set to ' +
    //     this.sandboxPhone.phoneNumber
    // );
    return this.sandboxPhone.phoneType;
  }

  setDisabled(status: boolean): boolean {
    if (status) {
      return true;
    } else {
      return false;
    }
  }
}
// These statements are OUTSIDE of the SandboxComponent class... not like in Java, here this is possible
// function add(x: number, y: number): number {
//   return x + y;
// }

// const myAdd = function(x: number, y: number): number {
//   return x + y;
// };
// const aPhoneObject: Phone = new Phone();
// let bNumber = 42; // Will not be displayed in the html using {{aNumber}} reference

// console.log('myAdd result: ' + myAdd(1, 2));
// console.log('function add result: ' + add(2, 2));
// console.log('A number ' + bNumber + ' incremented to ' + bNumber++);
// console.log(
//   'Phone type: ' +
//     aPhoneObject.phoneType +
//     ' Phone number: ' +
//     aPhoneObject.phoneNumber
// );

// function hello(thing) {
//   console.log(this + ' says hello ' + thing);
// }
// hello.call('alma', 'körte');
