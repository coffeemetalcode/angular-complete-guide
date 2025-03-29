import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';

import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: false,
  // imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  /* Using legacy Angular change detection */
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';

  /* Using Angular 17+ `signals` */
  // enteredTitle = signal('');
  // enteredSummary = signal('');
  // enteredDueDate = signal('');

  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>;
  // @Output() add = new EventEmitter<NewTaskData>();

  private _tasksService = inject(TasksService);

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this._tasksService.addTask(
      this.userId,
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        date: this.enteredDueDate
      });

    this.close.emit();
  }
}
