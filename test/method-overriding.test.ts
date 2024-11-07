describe("Method Overriding", () => {
  class Mahasiswa {
    name: string;
    constructor(name: string) {
      this.name = name;
    }

    sayHi(name: string): void {
      console.info(`Halo ${name}, my name is ${this.name}`);
    }
  }

  class Dosen extends Mahasiswa {
    sayHi(name: string): void {
      // Method Overriding
      // console.info(`Halo ${name}, my name is ${this.name}, I'm your Teacher`);

      // Super Method
      super.sayHi(name);
      console.info("and, I am your teacher");
    }
  }

  it("should support method overriding", () => {
    const mahasiswa: Mahasiswa = new Mahasiswa("Gifari");
    mahasiswa.sayHi("Pak Nursal");

    const dosen: Dosen = new Dosen("Pak Nursal");
    dosen.sayHi("Gifari");
  });
});
