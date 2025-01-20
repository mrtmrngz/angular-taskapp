import {Injectable} from '@angular/core';
import {UserInterface} from './user.model';


@Injectable({providedIn: "root"})
export class UserService {
  users: UserInterface[] = []

  addUser(userData: UserInterface){
    this.users.push(userData)
  }

  getUsername(id: string){
    return this.users.find(user => user.id === id)?.username
  }
}
