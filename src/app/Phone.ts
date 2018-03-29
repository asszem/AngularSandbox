// This is a class that can be imported
export class Phone {
  phoneType: string;
  phoneNumber: number;

  setPhoneType(phoneType: string) {
    // console.log('set phoneType called. String to set: ' + phoneType);
    this.phoneType = phoneType;
    // console.log('Current phonetype: ' + this.phoneType);
  }
}
