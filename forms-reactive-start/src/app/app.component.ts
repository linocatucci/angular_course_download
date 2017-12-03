import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {Observable} from "rxjs/Observable";
import {setTimeout} from "timers";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signUpForm: FormGroup;
  forbiddenUsernames = ['Chris', 'Mary']

  ngOnInit() {
    // console.log(this.signUpForm);
    this.signUpForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.email, Validators.required], this.forbiddenEmails)
      }),
      'gender': new FormControl('male'), // default gender
      'hobbies': new FormArray([])
    });
    console.log(this.signUpForm);
    // this.signUpForm.valueChanges.subscribe(
    //   (value) => {
    //     console.log(value);
    //   }
    // );
    this.signUpForm.statusChanges.subscribe(
      (status) => {
        console.log(status);
      }
    );
  }

  onSubmit() {
    console.log(this.signUpForm);
    this.signUpForm.reset({
      'userData': {'username': 'Lino'},
      'gender': 'male'
    });
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(control);
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    console.log(this.forbiddenUsernames.indexOf(control.value)); // returns -1 when TRUE!
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    }
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 2000);
    });
    return promise;
  }
}

//
// setTimeout(() => {
//   if (control.value === 'test@test.com') {
//     resolve({emailsForbidden: true});
//   } else {
//     resolve(null);
//   }
// }, 15000);
// });
