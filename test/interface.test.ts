describe("Interface", () => {
  interface HasName {
    name: string;
  }

  interface CanSayHi {
    sayHi(name: string): void;
  }

  interface CanSayBye {
    sayGoodBye(name: string): void;
  }

  class Mahasiswa implements HasName, CanSayHi, CanSayBye {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    sayHi(name: string): void {
      console.info(`Hi ${name}, my name is ${this.name}`);
    }

    sayGoodBye(name: string): void {
      console.info(`Bye ${name}`);
    }
  }

  // Inheritance Interface
  it("should support in inheritance", () => {
    const mahasiswa = new Mahasiswa("Gifari");
    mahasiswa.sayHi("Andrean");
    mahasiswa.sayGoodBye("Hasna");
  });
});
