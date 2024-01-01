import Expenses from './Expenses.js';

class RecurringExpenses extends Expenses {
    constructor(
        y_property_tax_c = 250,
        m_service_fee_c = 50,
        y_home_insurance_c = 0,
        y_life_insurance_c = 0,
        y_maintenance_c = 0
    ) {
        super();
        this.y_property_tax_c = y_property_tax_c;
        this.m_service_fee_c = m_service_fee_c;
        this.y_home_insurance_c = y_home_insurance_c;
        this.y_life_insurance_c = y_life_insurance_c;
        this.y_maintenance_c = y_maintenance_c;
    }
  
    get y_service_fee_c() {
        return this.m_service_fee_c * 12;
    }
    
    get total_c() {
        return (
            this.y_property_tax_c +
            this.y_service_fee_c +
            this.y_home_insurance_c +
            this.y_life_insurance_c +
            this.y_maintenance_c
        ).toFixed(2) / 1;
    }
}

export default RecurringExpenses;
