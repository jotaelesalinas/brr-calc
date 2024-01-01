import chai from 'chai';
import ShortStayIncome from '../ShortStayIncome.js';

const { expect } = chai;

describe('ShortStayIncome', () => {
  it('should correctly calculate total income', () => {
    const shortStayIncome = new ShortStayIncome(12000);

    expect(shortStayIncome.y_total_c).to.equal(12000.0);
    expect(shortStayIncome.m_total_c).to.equal(1000.0);
  });

  it('should correctly calculate estimations', () => {
    const shortStayIncome = new ShortStayIncome();

    shortStayIncome.y_estimation_airdna_c = 10000;
    expect(shortStayIncome.y_estimation_airdna_c).to.equal(10000.0);
    expect(shortStayIncome.y_estimation_c).to.equal(10000.0);

    shortStayIncome.y_estimation_airdna_c = 0;
    expect(shortStayIncome.y_estimation_airdna_c).to.equal(0.0);

    shortStayIncome.y_estimation_pricelabs_c = 8000;
    expect(shortStayIncome.y_estimation_pricelabs_c).to.equal(8000.0);
    expect(shortStayIncome.y_estimation_c).to.equal(8000.0);

    shortStayIncome.y_estimation_pricelabs_c = 0;

    shortStayIncome.y_estimation_airbnb_occupancy_p = 40;
    expect(shortStayIncome.y_estimation_airbnb_occupancy_p).to.equal(40.0);
    expect(shortStayIncome.y_estimation_c).to.equal(0.0);
    shortStayIncome.y_estimation_airbnb_avg_rate_c = 54.5;
    expect(shortStayIncome.y_estimation_airbnb_avg_rate_c).to.equal(54.5);
    expect(shortStayIncome.y_estimation_c).to.equal(7957.0);

    shortStayIncome.y_estimation_airdna_c = 10000;
    expect(shortStayIncome.y_estimation_c).to.equal(8978.5);

    shortStayIncome.y_estimation_pricelabs_c = 8000;
    expect(shortStayIncome.y_estimation_c).to.closeTo(8652.33, 0.01);
  });

  it('should correctly update income', () => {
    const shortStayIncome = new ShortStayIncome(6000);
    expect(shortStayIncome.y_total_c).to.equal(6000.0);
    expect(shortStayIncome.m_total_c).to.equal(500.0);

    shortStayIncome.y_estimation_airdna_c = 7000;
    shortStayIncome.y_estimation_pricelabs_c = 8000;
    shortStayIncome.y_estimation_airbnb_occupancy_p = 54.8;
    shortStayIncome.y_estimation_airbnb_avg_rate_c = 60;
    expect(shortStayIncome.y_estimation_c).to.closeTo(9000.0, 0.01);

    shortStayIncome.y_income_c = shortStayIncome.y_estimation_c;
    expect(shortStayIncome.y_total_c).to.equal(9000.0);
    expect(shortStayIncome.m_total_c).to.equal(750.0);
  });
});
