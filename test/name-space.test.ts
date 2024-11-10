import { MathUtil, SayHi } from "../src/name-space";

describe("Namespace", () => {
  it("should support", () => {
    console.info(SayHi.nama);
    console.info(SayHi.sayHi("Gifari"));
    console.info(MathUtil.sum(2, 2, 2, 3));
  });
});
