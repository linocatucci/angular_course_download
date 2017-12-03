import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  projectForm: FormGroup;
  projectStatsVals = ['Stable', 'Critical', 'Finished'];
  forbiddenPrjNames = ['Test'];


  ngOnInit() {
    this.projectForm = new FormGroup({
      // own sync validator : this.forbiddenNames.bind(this)
      'projectName': new FormControl(
        null,
        [Validators.required, this.forbiddenNames.bind(this)],
        this.asyncForbiddenNamesV2),
      'email': new FormControl(null, [Validators.email, Validators.required]),
      'projectStatus': new FormControl('Critical')
    });

  }

  onSaveProject() {
    console.log(this.projectForm);
    // console.log(this.projectForm.get('projectName').value);
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    console.log(this.forbiddenPrjNames.indexOf(control.value))
    if (this.forbiddenPrjNames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    }
    return null;
  }

  asyncForbiddenNamesV2(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Testproject') {
          resolve({'nameIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }

  // //
  // forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
  //   const promise = new Promise<any>((resolve, reject) => {
  //     setTimeout(() => {
  //       if (control.value === 'test@test.com') {
  //         resolve({'emailIsForbidden': true});
  //       } else {
  //         resolve(null);
  //       }
  //     }, 2000);
  //   });
  //   return promise;
  // }
}
