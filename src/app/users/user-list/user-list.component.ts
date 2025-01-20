import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NewUserModalComponent} from '../new-user-modal/new-user-modal.component';
import {UserService} from '../user.service';

@Component({
  selector: 'app-user-list',
  imports: [NewUserModalComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {

  isAddUserModalOpen: boolean = false
  @Output() selectUser = new EventEmitter<string>()
  selectedUserId: string | null = null

  constructor(private userService: UserService){}

  get getUsers(){
    return this.userService.users
  }

  handleOpenModal(){
    this.isAddUserModalOpen = true
  }

  handleCloseModal(){
    this.isAddUserModalOpen = false
  }

  handleSelectUser(id: string){
    this.selectUser.emit(id)
    this.selectedUserId = id
  }

}
