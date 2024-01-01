import chai from 'chai';
import ShortStayFees from '../ShortStayFees.js';

const { expect } = chai;

describe('ShortStayFees', () => {
  it('should correctly calculate total fees', () => {
    const shortStayFees = new ShortStayFees();
    shortStayFees.y_income_c = 10000;
    shortStayFees.platform_fee_p = 10;
    shortStayFees.manager_fee_p = 15;

    expect(shortStayFees.y_income_c).to.equal(10000.0);
    expect(shortStayFees.platform_fee_p).to.equal(10.0);
    expect(shortStayFees.manager_fee_p).to.equal(15.0);
    expect(shortStayFees.y_total_c).to.equal(2350.0);
    expect(shortStayFees.m_total_c).to.closeTo(2350.0 / 12, 0.01);

    shortStayFees.y_income_c = 12000;
    expect(shortStayFees.y_total_c).to.equal(2820.0);
    expect(shortStayFees.m_total_c).to.closeTo(2820.0 / 12, 0.01);
  });
});
