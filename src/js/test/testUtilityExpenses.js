import chai from 'chai';
import UtilityExpenses from '../UtilityExpenses.js';

const { expect } = chai;

describe('UtilityExpenses', () => {
  it('should correctly calculate total expenses', () => {
    const utilityExpenses = new UtilityExpenses();
    utilityExpenses.m_water_c = 20;
    utilityExpenses.m_electricity_c = 50;
    utilityExpenses.m_heating_c = 7.5;
    utilityExpenses.m_internet_c = 25.0;
    utilityExpenses.m_netflix_c = 5.0;
    utilityExpenses.m_other_c = 1.0;

    expect(utilityExpenses.m_water_c).to.equal(20.0);
    expect(utilityExpenses.y_water_c).to.equal(240.0);
    expect(utilityExpenses.m_electricity_c).to.equal(50.0);
    expect(utilityExpenses.y_electricity_c).to.equal(600.0);
    expect(utilityExpenses.m_heating_c).to.equal(7.5);
    expect(utilityExpenses.y_heating_c).to.equal(90.0);
    expect(utilityExpenses.m_internet_c).to.equal(25.0);
    expect(utilityExpenses.y_internet_c).to.equal(300.0);
    expect(utilityExpenses.m_netflix_c).to.equal(5.0);
    expect(utilityExpenses.y_netflix_c).to.equal(60.0);
    expect(utilityExpenses.m_other_c).to.equal(1.0);
    expect(utilityExpenses.y_other_c).to.equal(12.0);
    expect(utilityExpenses.m_total_c).to.equal(108.5);
    expect(utilityExpenses.y_total_c).to.equal(1302.0);
  });
});
