import { Injectable } from '@angular/core';

export interface Task {
  id: number;
  name: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: Task[] = [
    { id: 1, name: 'Estudiar Angular', completed: false },
    { id: 2, name: 'Hacer tarea', completed: false }
  ];

  getTasks() {
    return this.tasks;
  }

  addTask(name: string) {
    this.tasks.push({
      id: Date.now(),
      name,
      completed: false
    });
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(t => t.id !== id);
  }

  toggleTask(id: number) {
    const task = this.tasks.find(t => t.id === id);
    if (task) task.completed = !task.completed;
  }
}
