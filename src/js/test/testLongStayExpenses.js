import chai from 'chai';
import LongStayExpenses from '../LongStayExpenses.js';

const { expect } = chai;

describe('LongStayExpenses', () => {
  it('should correctly calculate total expenses', () => {
    const longStayExpenses = new LongStayExpenses();
    longStayExpenses.y_nonpayment_insurance_c = 180;
    longStayExpenses.m_other_c = 10.0;

    expect(longStayExpenses.y_nonpayment_insurance_c).to.equal(180.0);
    expect(longStayExpenses.m_other_c).to.equal(10.0);
    expect(longStayExpenses.y_other_c).to.equal(120.0);
    expect(longStayExpenses.y_total_c).to.equal(300.0);
    expect(longStayExpenses.m_total_c).to.closeTo(300.0 / 12, 0.01);
  });
});
