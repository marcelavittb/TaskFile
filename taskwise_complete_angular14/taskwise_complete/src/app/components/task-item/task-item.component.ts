import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html'
})
export class TaskItemComponent {
  @Input() task = '';
  @Output() remove = new EventEmitter<void>();

  removeTask() {
    this.remove.emit();
  }
}
