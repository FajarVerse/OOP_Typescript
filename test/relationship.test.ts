describe("Relationship", () => {
  // Relationship Class (class yang memliki properties atau method yang sama persis)
  class Person {
    constructor(public name: string) {}
  }

  class Mahasiswa {
    constructor(public name: string) {}
  }

  it("should support", () => {
    const mahasiswa: Person = new Mahasiswa("Gifari");
    console.info(mahasiswa.name)
  });
});
