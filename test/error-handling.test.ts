describe("Error Handling", () => {

  // Error handling trycatch
  class ErrorValidation extends Error {
    constructor(public message: string) {
      super(message);
    }
  }

  function doubleIt(value: number): number {
    if (value < 0) {
      throw new ErrorValidation("Value Cannot be less than 0");
    }
    return value * 2;
  }

  it("should support", () => {
    try {
      const result = doubleIt(-2);
      console.info(result);
    } catch (e) {
      if (e instanceof ErrorValidation) {
        console.info(e.message);
      }
    }
  });
});
