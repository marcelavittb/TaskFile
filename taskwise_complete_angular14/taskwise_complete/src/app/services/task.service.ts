import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private tasks: string[] = [];

  getTasks() {
    return this.tasks;
  }

  addTask(task: string) {
    this.tasks.push(task);
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
