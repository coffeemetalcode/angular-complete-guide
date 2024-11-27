import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  // template: '<h1>Hello!</h1>', // <-- only for components with tiny markup
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {}
