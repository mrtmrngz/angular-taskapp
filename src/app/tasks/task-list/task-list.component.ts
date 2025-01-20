import {Component, Input} from '@angular/core';
import {NewTaskModalComponent} from '../new-task-modal/new-task-modal.component';
import {UserService} from '../../users/user.service';
import {TaskService} from '../task.service';

@Component({
  selector: 'app-task-list',
  imports: [NewTaskModalComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  isAddTaskModalOpen: boolean = false
  @Input() userId: string = ""

  constructor(private userService: UserService, private taskService: TaskService) {}

  get getUsername(){
    return this.userService.getUsername(this.userId)
  }

  get userTasks(){
    return this.taskService.getUserTasks(this.userId)
  }

  handleCompleteTask(id: string){
    this.taskService.completeTask(id)
  }

  handleOpenModal(){
    this.isAddTaskModalOpen = true
  }

  handleCloseModal(){
    this.isAddTaskModalOpen = false
  }
}
