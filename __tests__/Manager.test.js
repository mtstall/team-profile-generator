const Manager = require("../lib/Manager");

describe("Manager", () => {
    // tests for methods
  describe("get role", () => {
    it("should return engineer as role", () => {
      const e = new Manager("Taylor", "0123", "mtstallings95@gmail.com","012");
      expect(e.getRole()).toBe("Manager");
    });
  });
  describe("get office number", () => {
    it("should return 012", () => {
      const e = new Manager("Taylor", "0123", "mtstallings95@gmail.com","012");
      expect(e.getOfficeNumber()).toBe(`Office number: 012`);
    });
  });

    //tests for properties
  describe("xtrainfo property", () => {
    it("should return 012", () => {
      const e = new Manager("Taylor", "0123", "mtstallings95@gmail.com","012");
      expect(e.xtrainfo).toBe(`Office number: 012`);
    });
  });
  describe("role property", () => {
    it("should return Manager", () => {
      const e = new Manager("Taylor", "0123", "mtstallings95@gmail.com","012");
      expect(e.role).toBe("Manager");
    });
  });

  // testing that an object is being created
  describe("object", () => {
    it("should return object", () => {
      const e = new Manager();
      expect(typeof(e)).toBe("object");
    });
  });
});
