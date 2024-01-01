import Income from './Income.js';

class ShortStayIncome extends Income {
    constructor(y_income_c = 6000) {
        super();
        this.y_income_c = y_income_c;
        this.y_estimation_airdna_c = 0;
        this.y_estimation_pricelabs_c = 0;
        this.y_estimation_airbnb_occupancy_p = 0;
        this.y_estimation_airbnb_avg_rate_c = 0;
    }
  
    get y_estimation_c() {
        let estimations = [];
        
        if (this.y_estimation_airdna_c != 0) {
            estimations.push(this.y_estimation_airdna_c);
        }
        if (this.y_estimation_pricelabs_c != 0) {
            estimations.push(this.y_estimation_pricelabs_c);
        }
        if (this.y_estimation_airbnb_occupancy_p != 0 && this.y_estimation_airbnb_avg_rate_c != 0) {
            estimations.push(Math.round((this.y_estimation_airbnb_occupancy_p / 100) * 365) * this.y_estimation_airbnb_avg_rate_c);
        }

        return estimations.length === 0 ? 0 : (estimations.reduce((a, b) => a + b, 0) / estimations.length).toFixed(2) / 1;
    }
    
    get total_c() {
        return this.y_income_c.toFixed(2) / 1;
    }
}

export default ShortStayIncome;
