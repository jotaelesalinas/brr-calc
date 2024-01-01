import Expenses from './Expenses.js';

class UtilityExpenses extends Expenses {
    constructor(
        m_water_c = 0,
        m_electricity_c = 0,
        m_heating_c = 0,
        m_internet_c = 0,
        m_netflix_c = 0,
        m_other_c = 0
    ) {
        super();
        this.m_water_c = m_water_c;
        this.m_electricity_c = m_electricity_c;
        this.m_heating_c = m_heating_c;
        this.m_internet_c = m_internet_c;
        this.m_netflix_c = m_netflix_c;
        this.m_other_c = m_other_c;
    }
  
    get y_water_c() {
        return this.m_water_c * 12;
    }
    
    get y_electricity_c() {
        return this.m_electricity_c * 12;
    }
    
    get y_heating_c() {
        return this.m_heating_c * 12;
    }
    
    get y_internet_c() {
        return this.m_internet_c * 12;
    }
    
    get y_netflix_c() {
        return this.m_netflix_c * 12;
    }
    
    get y_other_c() {
        return this.m_other_c * 12;
    }
    
    get total_c() {
        return (
            this.y_water_c +
            this.y_electricity_c +
            this.y_heating_c +
            this.y_internet_c +
            this.y_netflix_c +
            this.y_other_c
        ).toFixed(2) / 1;
    }
}

export default UtilityExpenses;
