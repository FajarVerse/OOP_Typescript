describe("Instance Of", () => {
  class Mahasiswa {}

  class Dosen {}

  const Andrean = new Mahasiswa();
  const Syayid = new Dosen();

  it("should have problem using typeof", () => {
    console.info(typeof Andrean);
    console.info(typeof Syayid);
  });

  // Istanceof (mengecek type class)
  it("should have problem use istanceof", () => {
    expect(Andrean instanceof Mahasiswa).toBe(true);
    expect(Andrean instanceof Dosen).toBe(false);

    expect(Syayid instanceof Mahasiswa).toBe(false);
    expect(Syayid instanceof Dosen).toBe(true);
  });
});
