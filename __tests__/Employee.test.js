const Employee = require("../lib/Employee");

describe("employee", () => {
    // tests for methods
  describe("get role", () => {
    it("should return Employee as role", () => {
      const e = new Employee("Taylor", "0123", "mtstallings95@gmail.com");
      expect(e.getRole()).toBe("Employee");
    });
  });
  describe("get name", () => {
    it("should return Taylor as name", () => {
      const e = new Employee("Taylor", "0123", "mtstallings95@gmail.com");
      expect(e.getName()).toBe("Taylor");
    });
  });
  describe("get ID", () => {
    it("should return 0123 as role", () => {
      const e = new Employee("Taylor", "0123", "mtstallings95@gmail.com");
      expect(e.getId()).toBe("0123");
    });
  });
  describe("get email", () => {
    it("should return mtstallings95@gmail.com as email", () => {
      const e = new Employee("Taylor", "0123", "mtstallings95@gmail.com");
      expect(e.getEmail()).toBe("mtstallings95@gmail.com");
    });
  });
  // tests for properties
  describe("empName property", () => {
    it("should return Taylor", () => {
      const e = new Employee("Taylor", "0123", "mtstallings95@gmail.com");
      expect(e.empName).toBe("Taylor");
    });
  });
  describe("id property", () => {
    it("should return 0123", () => {
      const e = new Employee("Taylor", "0123", "mtstallings95@gmail.com");
      expect(e.id).toBe("0123");
    });
  });
  describe("id email property", () => {
    it("should return mtstallings95@gmail.com", () => {
      const e = new Employee("Taylor", "0123", "mtstallings95@gmail.com");
      expect(e.email).toBe("mtstallings95@gmail.com");
    });
  });
  // testing that an object is being created
  describe("object", () => {
    it("should return object", () => {
      const e = new Employee();
      expect(typeof(e)).toBe("object");
    });
  });
});
