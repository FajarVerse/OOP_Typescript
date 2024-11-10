describe("Absctract", () => {

  // Abstract Class (tidak bisa dibuat object hanya bisa diwariskan)
  abstract class Mahasiswa {
    id: number;
    abstract name: string;
    constructor(id: number) {
      this.id = id;
    }

    abstract sayHi(name: string): void;
  }

  class MahasiswaReguler extends Mahasiswa {
    name: string;

    constructor(id: number, name: string) {
      super(id);
      this.name = name;
    }

    sayHi(name: string): void {
      console.info(`Halo ${name}, My name is ${this.name}`);
    }
  }

  it("shoudl suport", () => {
    const mahasiswa1 = new MahasiswaReguler(1, "Gifari Fajar Maulana");
    mahasiswa1.sayHi("Syayid");
  });
});
