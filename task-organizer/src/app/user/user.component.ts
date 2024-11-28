import { Component, computed, EventEmitter, Input, input, Output, output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  /* Traditional Angular Inputs */
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;

  /* Signals inputs */
  // avatar = input.required<string>();
  // name = input.required<string>();

  /* Traditional Angular Output */
  @Output() select = new EventEmitter<string>();

  /* output function */
  // select = output<string>();

  /* For use with Input */
  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  /* For use with Signals */
  /* imagePath = computed(() => {
    return 'assets/users/' + this.avatar();
  }); */

  onSelectUser() {
    console.log(this.id);
    this.select.emit(this.id);
  }
}
