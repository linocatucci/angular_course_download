import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    @ViewChild('f') signUpForm: NgForm;
    submitted: boolean = false;
    defaultSelection = 'Advanced';
    selections = ['Basic', 'Advanced', 'Pro'];

    subscriptionForm = {
        emailaddr: '',
        selection: '',
        password: ''
    }

    onSubmit() {
        console.log(this.signUpForm.value);
        this.subscriptionForm.emailaddr = this.signUpForm.value.email;
        this.subscriptionForm.password = this.signUpForm.value.password;
        this.defaultSelection = this.signUpForm.value.subscription;
        this.submitted = true;
        console.log(this.signUpForm.value)
        this.signUpForm.reset();
    }
}
