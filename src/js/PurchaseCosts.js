import Costs from './Costs.js';

class PurchaseCosts extends Costs {
    constructor(initial_purchase_price_c = 100000) {
        super();
        this.purchase_price_c = initial_purchase_price_c;
        this.tax_p = .07;
        this.notary_c = 400;
        this.registry_c = 200;
        this.agent_fee_c = 0;
        this.renewal_c = 0;
        this.furniture_c = 0;
}
  
    get tax_c() {
        return this.purchase_price_c * (this.tax_p / 100);
    }
  
    get purchase_costs_c() {
        return this.tax_c + this.registry_c + this.agent_fee_c;
    }
  
    get total_c() {
        return this.purchase_price_c + this.purchase_costs_c + this.renewal_c + this.furniture_c;
    }
}

export default PurchaseCosts;
