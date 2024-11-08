describe("Parameter Properties", () => {
  // Parameter Properties
  class Name {
    constructor(public name: string) {}
  }

  it("should support in typescript", () => {
    const nama: Name = new Name("Gifari");
    console.info(nama.name);
  });
});
