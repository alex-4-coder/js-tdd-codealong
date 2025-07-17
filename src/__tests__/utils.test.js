import { currentAgeForBirthYear } from "../utils";

describe("currentAgeForBirthYear", () => {
  it("returns the age of a person based on the year of birth", () => {
   
    const birthYear = 1984;
    const expectedAge = new Date().getFullYear() - birthYear;

   const result = currentAgeForBirthYear(birthYear);

    expect(result).toBe(expectedAge);
  });

  it("returns the current year for a person born in year 0", () => {
   
    const birthYear = 0;
    const expectedAge = new Date().getFullYear();

    const result = currentAgeForBirthYear(birthYear);

    expect(result).toBe(expectedAge);
  });
});

