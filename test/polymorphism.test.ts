describe("Polymorphism", () => {
  class Mahasiswa {
    constructor(public name: string) {}
  }

  class Manajemen extends Mahasiswa {}

  class Dosen extends Manajemen {}

  // Function Polymorphism & Type Cast (mengubah data dari satu kelain secara detail & mengecek keturunan juga)
  function sayHello(mahasiswa: Mahasiswa): void {
    if (mahasiswa instanceof Dosen) {
      const dosen = mahasiswa as Dosen;
      console.info(`Halo dosen ${dosen.name}`);
    } else if (mahasiswa instanceof Manajemen) {
      const manajemen = mahasiswa as Manajemen;
      console.info(`Halo manajemen ${manajemen.name}`);
    } else {
      console.info(`Halo mahasiswa ${mahasiswa.name}`);
    }
  }

  function sayHelloWrong(mahasiswa: Mahasiswa): void {
    if (mahasiswa instanceof Manajemen) {
      const manajemen = mahasiswa as Manajemen;
      console.info(`Halo manajemen ${manajemen.name}`);
    } else if (mahasiswa instanceof Dosen) {
      const dosen = mahasiswa as Dosen;
      console.info(`Halo dosen ${dosen.name}`);
    } else {
      console.info(`Halo mahasiswa ${mahasiswa.name}`);
    }
  }

  it("should support", () => {
    let mahasiswa: Mahasiswa = new Mahasiswa("Gifari");
    console.info(mahasiswa);

    mahasiswa = new Manajemen("Gifari");
    console.info(mahasiswa);

    mahasiswa = new Dosen("Gifari");
    console.info(mahasiswa);
  });

  it("should support function polymorphism", () => {
    sayHello(new Mahasiswa("Gifari"));
    sayHello(new Manajemen("Gifari"));
    sayHello(new Dosen("Gifari"));
  });

  it("should wrong function polymorphism", () => {
    sayHelloWrong(new Mahasiswa("Gifari"));
    sayHelloWrong(new Manajemen("Gifari"));
    sayHelloWrong(new Dosen("Gifari"));
  });
});
