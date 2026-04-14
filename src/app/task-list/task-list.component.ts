import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../task.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html'
})
export class TaskListComponent {

  @Input() tasks: Task[] = [];

  @Output() deleteTaskEvent = new EventEmitter<number>();
  @Output() toggleTaskEvent = new EventEmitter<number>();

  deleteTask(id: number) {
    this.deleteTaskEvent.emit(id);
  }

  toggleTask(id: number) {
    this.toggleTaskEvent.emit(id);
  }
}
