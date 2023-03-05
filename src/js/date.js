export default class DateCalculator {
    constructor(dateString) {
      const date = new Date(dateString);
      this.date = isNaN(date) ? NaN : date;
    }
  
    getDayOfWeek() {
      if (isNaN(this.date)) {
        return null;
      }
      const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'];
      return weekdays[this.date.getDay()];
    }
  }  