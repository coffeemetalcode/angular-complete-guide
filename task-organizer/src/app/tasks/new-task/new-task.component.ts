import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NewTaskData } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
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

  @Output() cancel = new EventEmitter<void>;
  @Output() add = new EventEmitter<NewTaskData>();

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    console.log('submit!');
    this.add.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDueDate
    });
  }
}
