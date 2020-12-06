import {FormControl} from '@angular/forms';

export class MyValidators {

  static restrictedEmails(control: FormControl): {[key: string]: boolean} | null {
    const restrictedEmailArr: string[] = ['error@mail.ru', 'warning@mail.ru'];
    if ( restrictedEmailArr.includes(control.value) ) {
      return {restrictedEmails: true};
    }

    return null;
  }
}
