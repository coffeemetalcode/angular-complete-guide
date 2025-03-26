import { Component, computed, EventEmitter, Input, input, Output, output } from '@angular/core';

import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  /* Traditional Angular Inputs */
  @Input({ required: true}) user!: User;
  @Input({ required: true }) selected!: boolean;

  /* Signals inputs */
  // avatar = input.required<string>();
  // name = input.required<string>();

  /* Traditional Angular Output */
  @Output() select = new EventEmitter<string>();

  /* output function */
  // select = output<string>();

  /* For use with Input */
  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  /* For use with Signals */
  /* imagePath = computed(() => {
    return 'assets/users/' + this.avatar();
  }); */

  onSelectUser() {
    // console.log(this.user.id);
    this.select.emit(this.user.id);
  }
}
