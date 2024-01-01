import chai from 'chai';
import Profitability from '../Profitability.js';

const { expect } = chai;

describe('Profitability', () => {
  it('should correctly calculate profit figures', () => {
    const profitability = new Profitability();
    profitability.final_purchasing_price_c =  105_900.00 ;
    profitability.down_payment_c = 39_400.00;
    profitability.y_mortgage_payment_c =  4_814.72 ;
    profitability.y_avg_mortgage_principal_c =  3_325.00 ;
    profitability.y_gross_income_c = 8_200.00;
    profitability.y_net_income_c = 5_864.00;

    expect(profitability.final_purchasing_price_c).to.equal(105_900.0);
    expect(profitability.down_payment_c).to.equal(39_400.0);
    expect(profitability.y_mortgage_payment_c).to.equal(4_814.72);
    expect(profitability.y_avg_mortgage_principal_c).to.equal(3_325.00);
    expect(profitability.y_gross_income_c).to.equal(8_200.0);
    expect(profitability.y_net_income_c).to.equal(5_864.0);

    expect(profitability.gross_profit_p).to.closeTo(7.74, 0.01);
    expect(profitability.net_profit_p).to.closeTo(5.54, 0.01);
    expect(profitability.y_cashflow_c).to.closeTo(1_049.28, 0.01);
    expect(profitability.m_cashflow_c).to.closeTo(87.44, 0.01);
    expect(profitability.roce_p).to.closeTo(2.66, 0.01);
    expect(profitability.total_profit_p).to.closeTo(11.1, 0.01);
  });

  it('also without mortgage', () => {
    const profitability = new Profitability();
    profitability.final_purchasing_price_c =  105_900.00 ;
    profitability.down_payment_c = 105_900.00;
    profitability.y_mortgage_payment_c =  0.00 ;
    profitability.y_avg_mortgage_principal_c =  0.00 ;
    profitability.y_gross_income_c = 8_200.00;
    profitability.y_net_income_c = 5_864.00;

    expect(profitability.final_purchasing_price_c).to.equal(105_900.0);
    expect(profitability.down_payment_c).to.equal(105_900.0);
    expect(profitability.y_mortgage_payment_c).to.equal(0.00);
    expect(profitability.y_avg_mortgage_principal_c).to.equal(0.00);
    expect(profitability.y_gross_income_c).to.equal(8_200.0);
    expect(profitability.y_net_income_c).to.equal(5_864.0);

    expect(profitability.gross_profit_p).to.closeTo(7.74, 0.01);
    expect(profitability.net_profit_p).to.closeTo(5.54, 0.01);
    expect(profitability.y_cashflow_c).to.closeTo(5_864.0, 0.01);
    expect(profitability.m_cashflow_c).to.closeTo(488.67, 0.01);
    expect(profitability.roce_p).to.closeTo(5.57, 0.05);
    expect(profitability.total_profit_p).to.closeTo(5.57, 0.05);
  });
});
