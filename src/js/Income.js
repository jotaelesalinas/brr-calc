import Costs from './Costs.js';

class Income extends Costs {
    constructor() {
      super();
    }
    
    get y_total_c() {
        return this.total_c;
    }
    
    get m_total_c() {
        return this.y_total_c / 12;
    }
}

export default Income;
