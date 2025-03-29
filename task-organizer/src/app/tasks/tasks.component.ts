import { Component, inject, Input } from '@angular/core';

import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
  // imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  constructor(private _tasksService: TasksService) {}
  // private _tasksService = inject(TasksService);
  @Input({required: true}) userId!: string;
  @Input({required: true}) name!: string;

  isAddingTask = false;

  get selectedUserTasks() {
    return this._tasksService.getUserTasks(this.userId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }
}
