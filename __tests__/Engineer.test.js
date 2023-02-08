const Engineer = require("../lib/Engineer");

describe("engineer", () => {
    // tests for methods
  describe("get role", () => {
    it("should return engineer as role", () => {
      const e = new Engineer("Taylor", "0123", "mtstallings95@gmail.com","mtstall");
      expect(e.getRole()).toBe("Engineer");
    });
  });
  describe("get github", () => {
    it("should return github", () => {
      const e = new Engineer("Taylor", "0123", "mtstallings95@gmail.com","mtstall");
      expect(e.getGithub()).toBe(`Github account: <a href="https://github.com/mtstall" class="card-link" target ="_blank">mtstall</a>`);
    });
  });

    //tests for properties
  describe("xtrainfo property", () => {
    it("should return github", () => {
      const e = new Engineer("Taylor", "0123", "mtstallings95@gmail.com","mtstall");
      expect(e.xtrainfo).toBe(`Github account: <a href="https://github.com/mtstall" class="card-link" target ="_blank">mtstall</a>`);
    });
  });
  describe("role property", () => {
    it("should return engineer", () => {
      const e = new Engineer("Taylor", "0123", "mtstallings95@gmail.com","mtstall");
      expect(e.role).toBe("Engineer");
    });
  });

  // testing that an object is being created
  describe("object", () => {
    it("should return object", () => {
      const e = new Engineer();
      expect(typeof(e)).toBe("object");
    });
  });
});
