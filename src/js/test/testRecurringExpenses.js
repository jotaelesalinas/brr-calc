import chai from 'chai';
import RecurringExpenses from '../RecurringExpenses.js';

const { expect } = chai;

describe('RecurringExpenses', () => {
  it('should correctly calculate total expenses', () => {
    const recurringExpenses = new RecurringExpenses();
    recurringExpenses.y_property_tax_c = 300;
    recurringExpenses.m_service_fee_c = 45.50;
    recurringExpenses.y_home_insurance_c = 160.0;
    recurringExpenses.y_life_insurance_c = 100.0;
    recurringExpenses.y_maintenance_c = 210.0;

    expect(recurringExpenses.y_property_tax_c).to.equal(300.0);
    expect(recurringExpenses.m_service_fee_c).to.equal(45.50);
    expect(recurringExpenses.y_service_fee_c).to.equal(45.50 * 12);
    expect(recurringExpenses.y_home_insurance_c).to.equal(160.0);
    expect(recurringExpenses.y_life_insurance_c).to.equal(100.0);
    expect(recurringExpenses.y_maintenance_c).to.equal(210.0);
    expect(recurringExpenses.y_total_c).to.equal(1316.0);
    expect(recurringExpenses.m_total_c).to.closeTo(1316.0 / 12, 0.01);
  });
});
