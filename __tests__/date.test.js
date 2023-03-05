import Date from "./../src/js/date.js";

describe("Date", () => {
  let date;

  beforeEach(() => {
    date = new Date(23, 1, 1986);
  });

  afterEach(() => {
    date = null;
  });

  describe("constructor", () => {
    test("should correctly create a date object with three properties", () => {
      expect(date.day).toEqual(23);
      expect(date.month).toEqual(1);
      expect(date.year).toEqual(1986);
    });
  });
});
