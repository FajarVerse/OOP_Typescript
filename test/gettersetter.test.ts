describe("Getter and Setter", () => {
  class Category {
    _name?: string;

    get name(): string {
      if (this._name) {
        return this._name;
      } else {
        return "empety";
      }
    }

    set name(value: string) {
      if (value !== "") {
        this._name = value;
      }
    }
  }

  // Getter and Setter
  it("should can support get and set", () => {
    const category = new Category();
    console.info(category.name);

    category.name = "FILM";
    console.info(category.name);

    category.name = "";
    console.info(category.name);
  });
});
