class Profitability {
    constructor(
        final_purchasing_price_c = 0,
        down_payment_c = 0,
        y_mortgage_payment_c = 0,
        y_avg_mortgage_principal_c = 0,
        y_gross_income_c = 0,
        y_net_income_c = 0
    ) {
        this.final_purchasing_price_c = final_purchasing_price_c;
        this.down_payment_c = down_payment_c;
        this.y_mortgage_payment_c = y_mortgage_payment_c;
        this.y_avg_mortgage_principal_c = y_avg_mortgage_principal_c;
        this.y_gross_income_c = y_gross_income_c;
        this.y_net_income_c = y_net_income_c;
    }
  
    get gross_profit_p() {
        return (this.y_gross_income_c / this.final_purchasing_price_c * 100).toFixed(2) / 1;
    }
    
    get net_profit_p() {
        return (this.y_net_income_c / this.final_purchasing_price_c * 100).toFixed(2) / 1;
    }
    
    get y_cashflow_c() {
        return (this.y_net_income_c - this.y_mortgage_payment_c).toFixed(2) / 1;
    }
    
    get m_cashflow_c() {
        return (this.y_cashflow_c / 12).toFixed(2) / 1;
    }
    
    get roce_p() {
        return (this.y_cashflow_c / this.down_payment_c * 100).toFixed(2) / 1;
    }
    
    get total_profit_p() {
        return ((this.y_cashflow_c + this.y_avg_mortgage_principal_c) / this.down_payment_c * 100).toFixed(2) / 1;
    }
}

export default Profitability;
