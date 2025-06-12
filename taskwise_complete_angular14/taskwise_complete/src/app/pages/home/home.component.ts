import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  newTask = '';
  tasks = this.taskService.getTasks();

  constructor(private taskService: TaskService) {}

  addTask() {
    if (this.newTask.trim()) {
      this.taskService.addTask(this.newTask.trim());
      this.newTask = '';
    }
  }

  removeTask(index: number) {
    this.taskService.removeTask(index);
  }
}
