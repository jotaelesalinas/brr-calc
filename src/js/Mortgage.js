class Mortgage {
    constructor(initial_principal_c = 100000, initial_length_years_i = 20, initial_y_interest_f = 4.0) {
        this.principal_c = initial_principal_c;
        this.length_years_i = initial_length_years_i;
        this.y_interest_f = initial_y_interest_f;
    }
    
    get length_months_i() {
        return this.length_years_i * 12;
    }
    
    static computePayments(principal, loanTermInYears, annualInterestRate) {
        const monthlyInterestRate = (annualInterestRate / 100) / 12;
        const numberOfMonthlyPayments = loanTermInYears * 12;
        const monthlyPayment = (
            (principal * monthlyInterestRate) /
            (1 - Math.pow(1 + monthlyInterestRate, -numberOfMonthlyPayments))
          ).toFixed(2) / 1;
        const totalPayment = monthlyPayment * numberOfMonthlyPayments;
        const totalInterest = totalPayment - principal;
      
        return {
          totalPayment: totalPayment.toFixed(2) / 1,
          yearlyPayment: monthlyPayment.toFixed(2) * 12,
          monthlyPayment: monthlyPayment.toFixed(2) / 1,

          totalInterest: totalInterest.toFixed(2) / 1,
          avgYearlyInterest: (totalInterest / loanTermInYears).toFixed(2) / 1,
          avgMonthlyInterest: (totalInterest / numberOfMonthlyPayments).toFixed(2) / 1,

          totalPrincipal: principal.toFixed(2) / 1,
          avgYearlyPrincipal: (principal / loanTermInYears).toFixed(2) / 1,
          avgMonthlyPrincipal: (principal / numberOfMonthlyPayments).toFixed(2) / 1,
        };
      }

    get payments() {
        return Mortgage.computePayments(this.principal_c, this.length_years_i, this.y_interest_f);
    }
}

export default Mortgage;
