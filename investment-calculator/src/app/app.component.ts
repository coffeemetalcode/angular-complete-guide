import { Component, signal } from '@angular/core';

import { AnnualInvestmentData } from './annual-investment-data.model';
import { HeaderComponent } from './header/header.component';
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";
import { UserInputComponent } from './user-input/user-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserInputComponent, HeaderComponent, InvestmentResultsComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  annualInvestmentData = signal<AnnualInvestmentData[] | undefined>(undefined);
}
