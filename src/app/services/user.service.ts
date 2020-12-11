import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../models/User.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[]=[{
    firstName:"dada",
    lastName:"coder"
  }];
  userSubject = new Subject<User[]>();

  emitUser(){
    this.userSubject.next(this.users.slice());
  }

  addUser(user:User){
    this.users.push(user);
    this.emitUser();
  }
}
