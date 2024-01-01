import chai from 'chai';
import Mortgage from '../Mortgage.js';

const { expect } = chai;

describe('Mortgage.computePayments()', () => {
    it('should correctly calculate mortgage payments', () => {
        const principal = 100 * 1000;
        const loanYears = 30;
        const annualInterestRate = 4.5;

        const result = Mortgage.computePayments(principal, loanYears, annualInterestRate);

        const expectedMonthlyPayment = 506.69;

        expect(result.totalPayment).to.be.closeTo(expectedMonthlyPayment * 12 * loanYears, 0.1);
        expect(result.yearlyPayment).to.be.closeTo(expectedMonthlyPayment * 12, 0.1);
        expect(result.monthlyPayment).to.be.closeTo(expectedMonthlyPayment, 0.1);

        const expectedTotalInterest = result.totalPayment - principal;

        expect(result.totalInterest).to.be.closeTo(expectedTotalInterest, 0.1);
        expect(result.avgYearlyInterest).to.be.closeTo(expectedTotalInterest / loanYears, 0.1);
        expect(result.avgMonthlyInterest).to.be.closeTo(expectedTotalInterest / (loanYears * 12), 0.1);
    });
});

describe('Mortgage', () => {
    it('should work without arguments', () => {
        const mortgage = new Mortgage();
        expect(mortgage.principal_c).to.be.equal(100000, 0.1);
        expect(mortgage.length_years_i).to.be.equal(20);
        expect(mortgage.y_interest_f).to.be.equal(4.0);

        const expectedMonthlyPayment = 605.98;

        expect(mortgage.payments.totalPayment).to.be.closeTo(expectedMonthlyPayment * 12 * mortgage.length_years_i, 0.1);
        expect(mortgage.payments.yearlyPayment).to.be.closeTo(expectedMonthlyPayment * 12, 0.1);
        expect(mortgage.payments.monthlyPayment).to.be.closeTo(expectedMonthlyPayment, 0.1);

        const expectedTotalInterest = mortgage.payments.totalPayment - mortgage.principal_c;

        expect(mortgage.payments.totalInterest).to.be.closeTo(expectedTotalInterest, 0.1);
        expect(mortgage.payments.avgYearlyInterest).to.be.closeTo(expectedTotalInterest / mortgage.length_years_i, 0.1);
        expect(mortgage.payments.avgMonthlyInterest).to.be.closeTo(expectedTotalInterest / (mortgage.length_years_i * 12), 0.1);
    });

    describe('should handle modifying properties', () => {
        it('principal_c', () => {
            const mortgage = new Mortgage();
            expect(mortgage.payments.monthlyPayment).to.be.closeTo(605.98, 0.1);

            mortgage.principal_c = 150000;
            const expectedMonthlyPayment = 908.97;

            expect(mortgage.payments.totalPayment).to.be.closeTo(expectedMonthlyPayment * 12 * mortgage.length_years_i, 0.1);
            expect(mortgage.payments.yearlyPayment).to.be.closeTo(expectedMonthlyPayment * 12, 0.1);
            expect(mortgage.payments.monthlyPayment).to.be.closeTo(expectedMonthlyPayment, 0.1);

            const expectedTotalInterest = mortgage.payments.totalPayment - mortgage.principal_c;

            expect(mortgage.payments.totalInterest).to.be.closeTo(expectedTotalInterest, 0.1);
            expect(mortgage.payments.avgYearlyInterest).to.be.closeTo(expectedTotalInterest / mortgage.length_years_i, 0.1);
            expect(mortgage.payments.avgMonthlyInterest).to.be.closeTo(expectedTotalInterest / (mortgage.length_years_i * 12), 0.1);
        });
        it('length_years_i', () => {
            const mortgage = new Mortgage();
            expect(mortgage.payments.monthlyPayment).to.be.closeTo(605.98, 0.1);

            mortgage.length_years_i = 25;
            const expectedMonthlyPayment = 527.84;

            expect(mortgage.payments.totalPayment).to.be.closeTo(expectedMonthlyPayment * 12 * mortgage.length_years_i, 0.1);
            expect(mortgage.payments.yearlyPayment).to.be.closeTo(expectedMonthlyPayment * 12, 0.1);
            expect(mortgage.payments.monthlyPayment).to.be.closeTo(expectedMonthlyPayment, 0.1);

            const expectedTotalInterest = mortgage.payments.totalPayment - mortgage.principal_c;

            expect(mortgage.payments.totalInterest).to.be.closeTo(expectedTotalInterest, 0.1);
            expect(mortgage.payments.avgYearlyInterest).to.be.closeTo(expectedTotalInterest / mortgage.length_years_i, 0.1);
            expect(mortgage.payments.avgMonthlyInterest).to.be.closeTo(expectedTotalInterest / (mortgage.length_years_i * 12), 0.1);
        });
        it('y_interest_f', () => {
            const mortgage = new Mortgage();
            expect(mortgage.payments.monthlyPayment).to.be.closeTo(605.98, 0.1);

            mortgage.y_interest_f = 1.95;
            const expectedMonthlyPayment = 503.52;

            expect(mortgage.payments.totalPayment).to.be.closeTo(expectedMonthlyPayment * 12 * mortgage.length_years_i, 0.1);
            expect(mortgage.payments.yearlyPayment).to.be.closeTo(expectedMonthlyPayment * 12, 0.1);
            expect(mortgage.payments.monthlyPayment).to.be.closeTo(expectedMonthlyPayment, 0.1);

            const expectedTotalInterest = mortgage.payments.totalPayment - mortgage.principal_c;

            expect(mortgage.payments.totalInterest).to.be.closeTo(expectedTotalInterest, 0.1);
            expect(mortgage.payments.avgYearlyInterest).to.be.closeTo(expectedTotalInterest / mortgage.length_years_i, 0.1);
            expect(mortgage.payments.avgMonthlyInterest).to.be.closeTo(expectedTotalInterest / (mortgage.length_years_i * 12), 0.1);
        });
    });
});
