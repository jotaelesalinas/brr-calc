import Income from './Income.js';

class MixedStayIncome extends Income {
    constructor(
      m_low_rent_c = 500,
      empty_low_months_per_year_f = 0.5,
      num_high_months_i = 2,
      m_high_rent_c = 2000
    ) {
        super();
        this.m_low_rent_c = m_low_rent_c;
        this.empty_low_months_per_year_f = empty_low_months_per_year_f;
        this.num_high_months_i = num_high_months_i;
        this.m_high_rent_c = m_high_rent_c;
    }
  
    get num_low_months_i() {
        return 12 - this.num_high_months_i;
    }

    get total_low_rent_c() {
        return (this.m_low_rent_c * (12 - this.num_high_months_i - this.empty_low_months_per_year_f)).toFixed(2) / 1;
    }

    get total_high_rent_c() {
        return (this.m_high_rent_c * this.num_high_months_i).toFixed(2) / 1;
    }

    get total_c() {
        return (this.total_low_rent_c + this.total_high_rent_c).toFixed(2) / 1;
    }
}

export default MixedStayIncome;
