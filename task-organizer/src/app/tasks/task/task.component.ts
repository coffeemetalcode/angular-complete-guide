import { Component, inject, Input } from '@angular/core';

import { Task } from './task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: false,
  // imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  private _tasksService = inject(TasksService);

  @Input({ required: true }) task!: Task;

  onComplete() {
    this._tasksService.removeTask(this.task.id);
  }
}
