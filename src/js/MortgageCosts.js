import Costs from './Costs.js';

class MortgageCosts extends Costs {
    constructor(
      notary_c = 0,
      registry_c = 0,
      tax_c = 0,
      appraisal_c = 300,
      administration_c = 400,
      origination_fee_c = 0,
      broker_fee_c = 0
    ) {
        super();
        this.notary_c = notary_c;
        this.registry_c = registry_c;
        this.tax_c = tax_c;
        this.appraisal_c = appraisal_c;
        this.administration_c = administration_c;
        this.origination_fee_c = origination_fee_c;
        this.broker_fee_c = broker_fee_c;
    }
  
    get total_c() {
        return this.notary_c +
            this.registry_c +
            this.tax_c +
            this.appraisal_c +
            this.administration_c +
            this.origination_fee_c +
            this.broker_fee_c;
    }
}
  
export default MortgageCosts;
