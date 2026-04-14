import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-input.component.html'
})
export class TaskInputComponent {

  taskName: string = '';

  @Output() addTaskEvent = new EventEmitter<string>();

  addTask() {
    if (this.taskName.trim() === '') {
      alert('No puedes agregar una tarea vacía');
      return;
    }

    this.addTaskEvent.emit(this.taskName);
    this.taskName = '';
  }
}
