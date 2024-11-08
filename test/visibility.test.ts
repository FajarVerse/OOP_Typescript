describe("Visibility", () => {
  class Counter {
    // Private(hanyak bisa diakses class sendiri)
    // private count: number = 0;

    // Protected(bisa diakses class childnya)
    protected count: number = 0;

    // Public(bisa diakses siapa saja)
    public increment(): void {
      this.count++;
    }
    public getCount(): number {
      return this.count;
    }
  }

  class DoubleCounter extends Counter {
    public increment(): void {
      this.count += 2;
    }
  }

  it("should support in typescript", () => {
    const counter = new Counter();

    counter.increment();
    counter.increment();
    console.info(counter.getCount());
  });

  it("should support in typescript", () => {
    const counter = new DoubleCounter();

    counter.increment();
    counter.increment();
    console.info(counter.getCount());
  });
});
