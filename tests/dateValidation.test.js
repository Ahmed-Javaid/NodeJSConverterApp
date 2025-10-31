const { isValidEvent } = require("../controllers/Event");

describe("Event Validation", () => {
  test("should pass for valid future event", () => {
    const result = isValidEvent({
      name: "Conference",
      date: new Date(Date.now() + 86400000), // tomorrow
      category: "Business",
    });
    expect(result.valid).toBe(true);
  });

  test("should fail for past event date", () => {
    const result = isValidEvent({
      name: "Old Event",
      date: new Date(Date.now() - 86400000), // yesterday
      category: "Music",
    });
    expect(result.valid).toBe(false);
    expect(result.message).toBe("Event date cannot be in the past");
  });
});
<<<<<<< HEAD
=======

>>>>>>> a041369 (try3)
