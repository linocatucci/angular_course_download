import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  @ViewChild('f') signUpForm: NgForm;
  defaultQuestion = 'pet';
  defaultUserName = "user1";
  answer = '';
  genders = ['male', 'female'];
  genderDefault = 'male';
  user = {
    username: '',
    email: '',
    secret: '',
    answer: '',
    gender: ''
  };
  submitted: boolean = false;


  suggestedUserName() {
    const suggestedName = 'Superuser';
    // this.signUpForm.form.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret:'pet',
    //   questionAnswer: '',
    //   gender:''
    // })
    this.signUpForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    })
  }

  // one approach to get the values of the form
  // onSubmit(form: HTMLFormElement) {
  //   console.log(form)
  // }
  onSubmit() {
    this.submitted = true;
    console.log('is dit valide? ' + this.signUpForm.touched);
    console.log(this.signUpForm);
    this.user.username = this.signUpForm.value.userData.username;
    this.user.email = this.signUpForm.value.userData.email;
    this.user.secret = this.signUpForm.value.secret;
    this.user.answer = this.signUpForm.value.questionAnswer;
    this.user.gender = this.signUpForm.value.gender;

    this.signUpForm.reset();
  }
}
