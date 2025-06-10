import { Injectable, signal } from "@angular/core";

import { AnnualInvestmentData } from "./annual-investment-data.model";
import type { InvestmentFormData } from "./investment-form.model";

@Injectable({ providedIn: 'root' })
export class InvestmentService {
  annualInvestmentData = signal<AnnualInvestmentData[] | undefined>(undefined);

  calculateInvestmentResults(data: InvestmentFormData) {
    const { initialInvestment, duration, expectedReturn, annualInvestment } = data;
    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;

      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });

      this.annualInvestmentData.set(annualData);
    }

    return this.annualInvestmentData;
  }
}