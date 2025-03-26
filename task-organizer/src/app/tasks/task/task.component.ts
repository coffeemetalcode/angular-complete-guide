import { DatePipe } from '@angular/common';
import { Component, inject, Input } from '@angular/core';

import { Task } from './task.model';
import { CardComponent } from "../../shared/card/card.component";
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
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
