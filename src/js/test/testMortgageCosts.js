import chai from 'chai';
import MortgageCosts from '../MortgageCosts.js';

const { expect } = chai;

describe('MortgageCosts', () => {
    it('should correctly calculate total cost', () => {
        const mortgageCosts = new MortgageCosts();
        mortgageCosts.notary_c          =       1.0000001;
        mortgageCosts.registry_c        =      20.0000020;
        mortgageCosts.tax_c             =     300.0000300;
        mortgageCosts.appraisal_c       =    1000.0001000;
        mortgageCosts.administration_c  =   20000.0020000;
        mortgageCosts.origination_fee_c =  300000.0300000;
        mortgageCosts.broker_fee_c      = 1000000.1000000;

        expect(mortgageCosts.notary_c).to.equal(1.0000001);
        expect(mortgageCosts.registry_c).to.equal(20.0000020);
        expect(mortgageCosts.tax_c).to.equal(300.0000300);
        expect(mortgageCosts.appraisal_c).to.equal(1000.0001000);
        expect(mortgageCosts.administration_c).to.equal(20000.0020000);
        expect(mortgageCosts.origination_fee_c).to.equal(300000.0300000);
        expect(mortgageCosts.broker_fee_c).to.equal(1000000.1000000);
        expect(mortgageCosts.total_c).to.equal(1321321.1321321);
    });
});
