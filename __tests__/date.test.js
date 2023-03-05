import DateCalculator from "./../src/js/date.js";

describe("DateCalculator", () => {
  describe("constructor", () => {
    it("should create a new Date object with a valid date string", () => {
      const dateString = "2023-03-05";
      const dateCalculator = new DateCalculator(dateString);
      expect(dateCalculator.date).toEqual(new Date(dateString));
    });
  });

  describe("getDayOfWeek", () => {
    it("should return the correct day of the week for a valid date string", () => {
      const dateString = "2023-03-05";
      const dateCalculator = new DateCalculator(dateString);
      const dayOfWeek = dateCalculator.getDayOfWeek();
      expect(dayOfWeek).toBe("Sunday");
    });
  });
});
