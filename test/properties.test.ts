describe("Properties", () => {
  class Mahasiswa {
    readonly IdMhs: number;
    name: string = "Tanpa Nama";
    age?: number;

    constructor(id: number, name: string) {
      this.IdMhs = id;
      this.name = name;
    }

    sayHi(name: string): void {
      console.info(`Hi ${name}, my name is ${this.name}`);
    }
  }

  // Class Properties
  it("should can have properties", () => {
    const Mahasiswa1: Mahasiswa = new Mahasiswa(12, "Gifari Fajar Maulana");

    console.info(Mahasiswa1.name);
    console.info(Mahasiswa1);
  });

  // Method
  it("should can have method", () => {
    const mahasiswa = new Mahasiswa(14, "Gifari");
    mahasiswa.sayHi("Alfa");
  });
});
