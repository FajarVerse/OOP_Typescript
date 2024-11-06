describe("Class", () => {
  class Customer {
    constructor() {
      console.info("New Customer");
    }
  }

  class Order {}

  it("should can create class", function () {
    const customer: Customer = new Customer();
    const order = new Order();
  });

  it("should can support constractor", () => {
    new Customer();
  });
});
