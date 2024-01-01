import chai from 'chai';
import MixedStayIncome from '../MixedStayIncome.js';

const { expect } = chai;

describe('MixedStayIncome', () => {
  it('should correctly calculate total income', () => {
    const mixedStayIncome = new MixedStayIncome();

    mixedStayIncome.m_low_rent_c = 600.0;
    mixedStayIncome.empty_low_months_per_year_f = .5;
    mixedStayIncome.num_high_months_i = 2;
    mixedStayIncome.m_high_rent_c = 2_400;

    expect(mixedStayIncome.m_low_rent_c).to.equal(600.0);
    expect(mixedStayIncome.empty_low_months_per_year_f).to.equal(0.5);
    expect(mixedStayIncome.num_high_months_i).to.equal(2);
    expect(mixedStayIncome.num_low_months_i).to.equal(10);
    expect(mixedStayIncome.m_high_rent_c).to.equal(2_400.0);
    expect(mixedStayIncome.total_low_rent_c).to.equal(5_700.0);
    expect(mixedStayIncome.total_high_rent_c).to.equal(4_800.0);
    expect(mixedStayIncome.y_total_c).to.equal(10_500.0);
    expect(mixedStayIncome.m_total_c).to.equal(875.0);
  });
});
