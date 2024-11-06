describe("Inheritance", () => {
  class Employe {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  }

  class Developer extends Employe {}

  class Manajer extends Developer {}

  // Inheritance
  it("should support inheritance", () => {
    const employe = new Employe("Andrean");
    console.info(employe.name);

    const developer = new Developer("Gifari");
    console.info(developer.name);

    const manajer = new Manajer("Hasna");
    console.info(manajer.name);
  });
});
