import { Component } from '@angular/core';
import {UserListComponent} from './users/user-list/user-list.component';
import {TaskListComponent} from './tasks/task-list/task-list.component';

@Component({
  selector: 'app-root',
  imports: [UserListComponent, TaskListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  selectedUserId: string | null = null

  handleSelectedUser(id: string) {
    this.selectedUserId = id
  }
}
