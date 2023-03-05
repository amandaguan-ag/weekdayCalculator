export default class DateCalculator {
  constructor(dateString) {
    this.date = new Date(dateString);
  }

  getDayOfWeek() {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const dayOfWeek = daysOfWeek[this.date.getUTCDay()];
    return dayOfWeek;
  }
}
