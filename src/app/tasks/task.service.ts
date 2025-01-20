import {Injectable} from '@angular/core';
import {TaskInterface} from './task.model';


@Injectable({providedIn: "root"})
export class TaskService {
  tasks: TaskInterface[] = []

  getUserTasks(id: string) {
    return this.tasks.filter(task => task.userId === id)
  }

  addTask(taskData: TaskInterface) {
    this.tasks.unshift(taskData)
  }

  completeTask(id: string) {
    this.tasks = this.tasks.filter(task => task.id !== id)
  }
}
