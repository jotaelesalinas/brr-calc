import chai from 'chai';
import PurchaseCosts from '../PurchaseCosts.js';

const { expect } = chai;

describe('PurchaseCosts', () => {
  it('should correctly calculate total cost', () => {
    const purchaseCosts = new PurchaseCosts();
    purchaseCosts.purchase_price_c =  300000.0;
    purchaseCosts.tax_p            =      20.0;
    purchaseCosts.notary_c         =     300.0;
    purchaseCosts.registry_c       =    1000.0;
    purchaseCosts.agent_fee_c      =   20000.0;
    purchaseCosts.renewal_c        =       1.0;
    purchaseCosts.furniture_c      = 1000000.0;

    expect(purchaseCosts.purchase_price_c).to.equal(300000);
    expect(purchaseCosts.tax_p).to.equal(20);
    expect(purchaseCosts.notary_c).to.equal(300);
    expect(purchaseCosts.registry_c).to.equal(1000);
    expect(purchaseCosts.agent_fee_c).to.equal(20000);
    expect(purchaseCosts.renewal_c).to.equal(1);
    expect(purchaseCosts.furniture_c).to.equal(1000000);
    expect(purchaseCosts.tax_c).to.equal(60000);
    expect(purchaseCosts.purchase_costs_c).to.equal(81000);
    expect(purchaseCosts.total_c).to.equal(1381001);
  });
});
