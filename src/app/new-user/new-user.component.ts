import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/User.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  userForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router) { } // creer des form plus lisible



  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.userForm= this.formBuilder.group( {
      firstName: ['',Validators.required],
      lastName:'value DEFAULT'
    });
  }

  onSubmitForm() {
    const formValue = this.userForm.value;
    const newUser = new User(
      formValue['firstName'],
      formValue['lastName'],

    );
    this.userService.addUser(newUser);
    this.router.navigate(['/users']);
}

}
