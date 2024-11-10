// Namespace
export namespace SayHi {
  export const nama: string = "Gifari Fajar Maulana";

  export const sayHi = (name: string): void => {
    console.info(`Hi, ${name}`);
  };
}

export namespace MathUtil {
  export const sum = (...values: number[]): number => {
    let total = 0;
    for (const value of values) {
      total += value;
    }

    return total;
  };
}
