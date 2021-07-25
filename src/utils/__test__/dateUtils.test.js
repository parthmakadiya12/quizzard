import { jsDateToFormat } from "../dateUtils";

describe("dateUtils", () => {
  it("should return formatted date 10.12.1996", () => {
    const date = new Date("10.12.1996");
    const formattedDate = jsDateToFormat(date);
    expect(formattedDate).toBe("Saturday, October 12, 1996");
  });

  it("should return formatted date for 6.9.2020", () => {
    const date = new Date("6.9.2020");
    const formattedDate = jsDateToFormat(date);
    expect(formattedDate).toBe("Tuesday, June 09, 2020");
  });
});
