const Intern = require("../lib/Intern");

describe("intern", () => {
    // tests for methods
  describe("get role", () => {
    it("should return intern as role", () => {
      const e = new Intern("Taylor", "0123", "mtstallings95@gmail.com","School of Hard Knocks");
      expect(e.getRole()).toBe("Intern");
    });
  });
  describe("get school", () => {
    it("should return school of hard knocks", () => {
      const e = new Intern("Taylor", "0123", "mtstallings95@gmail.com","School of Hard Knocks");
      expect(e.getSchool()).toBe(`School: School of Hard Knocks`);
    });
  });

    //tests for properties
  describe("xtrainfo property", () => {
    it("should return school of hard knocks", () => {
      const e = new Intern("Taylor", "0123", "mtstallings95@gmail.com","School of Hard Knocks");
      expect(e.xtrainfo).toBe(`School: School of Hard Knocks`);
    });
  });
  describe("role property", () => {
    it("should return intern", () => {
      const e = new Intern("Taylor", "0123", "mtstallings95@gmail.com","School of Hard Knocks");
      expect(e.role).toBe("Intern");
    });
  });

  // testing that an object is being created
  describe("object", () => {
    it("should return object", () => {
      const e = new Intern();
      expect(typeof(e)).toBe("object");
    });
  });
});
