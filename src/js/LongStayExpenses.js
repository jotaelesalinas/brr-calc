import Expenses from './Expenses.js';

class LongStayExpenses extends Expenses {
    constructor(
        y_nonpayment_insurance_c = 0,
        m_other_c = 0
    ) {
        super();
        this.y_nonpayment_insurance_c = y_nonpayment_insurance_c;
        this.m_other_c = m_other_c;
    }
  
    get y_other_c() {
        return this.m_other_c * 12;
    }
    
    get total_c() {
        return (
            this.y_nonpayment_insurance_c +
            this.y_other_c
        ).toFixed(2) / 1;
    }
}

export default LongStayExpenses;
