describe("Class", () => {
  it("should can create class", function () {
    class Customer {}
    class Order {}

    const customer: Customer = new Customer();
    const order = new Order();
  });
});