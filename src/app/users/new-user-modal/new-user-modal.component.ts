import {Component, EventEmitter, Output} from '@angular/core';
import {ModalComponent} from '../../shared/modal/modal.component';
import {FormsModule} from '@angular/forms';
import {UserInterface} from '../user.model';
import {UserService} from '../user.service';

@Component({
  selector: 'app-new-user-modal',
  imports: [ModalComponent, FormsModule],
  templateUrl: './new-user-modal.component.html',
  styleUrl: './new-user-modal.component.css'
})
export class NewUserModalComponent {
  @Output() onClose = new EventEmitter<void>()
  enteredName: string = ""

  constructor(private userService: UserService) {}

  handleClose(){
    this.onClose.emit()
  }

  onSubmit(){
    const data: UserInterface = {
      id: Math.floor(Math.random() * 999999999).toString(),
      username: this.enteredName
    }
    this.userService.addUser(data)
    this.handleClose()
  }
}
