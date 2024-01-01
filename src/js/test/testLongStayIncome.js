import chai from 'chai';
import LongStayIncome from '../LongStayIncome.js';

const { expect } = chai;

describe('LongStayIncome', () => {
  it('should correctly calculate total income', () => {
    const longStayIncome = new LongStayIncome();

    longStayIncome.m_rent_c = 620.0;
    longStayIncome.empty_months_per_year_f = .25;

    expect(longStayIncome.m_rent_c).to.equal(620.0);
    expect(longStayIncome.empty_months_per_year_f).to.equal(.25);
    expect(longStayIncome.y_total_c).to.equal(7285.0);
    expect(longStayIncome.m_total_c).to.closeTo(7285.0 / 12, 0.01);
  });
});
