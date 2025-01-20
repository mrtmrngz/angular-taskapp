import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {ModalComponent} from '../../shared/modal/modal.component';
import {FormsModule} from '@angular/forms';
import type {TaskInterface} from '../task.model';
import {TaskService} from '../task.service';

@Component({
  selector: 'app-new-task-modal',
  imports: [ModalComponent, FormsModule],
  templateUrl: './new-task-modal.component.html',
  styleUrl: './new-task-modal.component.css'
})
export class NewTaskModalComponent {
  @Output() onClose = new EventEmitter<void>()
  enteredTitle: string = ""
  enteredDescription: string = ""
  @Input({required: true}) userId: string = ""
  private taskService = inject(TaskService)

  handleClose(){
    this.onClose.emit()
  }

  onSubmit(){
    const data: TaskInterface = {
      id: Math.floor(Math.random() * 999999999).toString(),
      title: this.enteredTitle,
      description: this.enteredDescription,
      userId: this.userId
    }
    this.taskService.addTask(data)
    this.handleClose()
  }
}
