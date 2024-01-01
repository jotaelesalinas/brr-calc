import Income from './Income.js';

class LongStayIncome extends Income {
    constructor(m_rent_c = 500, empty_months_per_year_f = 0.5) {
        super();
        this.m_rent_c = m_rent_c;
        this.empty_months_per_year_f = empty_months_per_year_f;
    }
  
    get total_c() {
        return (this.m_rent_c * (12 - this.empty_months_per_year_f)).toFixed(2) / 1;
    }
}

export default LongStayIncome;
