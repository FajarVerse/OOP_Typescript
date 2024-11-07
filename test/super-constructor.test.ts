describe("Super Constructor", () => {
  class Person {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  }

  // Super Constructor
  class Developer extends Person {
    level: string;
    constructor(name: string, level: string) {
      super(name);
      this.level = level;
    }
  }

  it("should supoort super construtor", () => {
    const developer: Developer = new Developer("Gifari", "WebDev");

    console.info(developer.name);
    console.info(developer.level);
  });
});
