import Expenses from './Expenses.js';

class ShortStayFees extends Expenses {
    constructor(
        y_income_c = 0,
        platform_fee_p = 15,
        manager_fee_p = 20
    ) {
        super();
        this.y_income_c = y_income_c;
        this.platform_fee_p = platform_fee_p;
        this.manager_fee_p = manager_fee_p;
    }
  
    get total_c() {
        return - (
            this.y_income_c * (1 - (this.platform_fee_p / 100)) * (1 - (this.manager_fee_p / 100))
                - this.y_income_c
        ).toFixed(2) / 1;
    }
}

export default ShortStayFees;
