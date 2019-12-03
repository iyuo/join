import { Context } from "@iyuo/context";
import { join, JoinTypes } from "../src/join";

describe("Simple tests", () => {
  test("Create a context", () => {
    let obj = new Context("Test");
    expect(obj.context()).toBe("Test");
  });

  test("join left", () => {
    var c = new Context({
      sample1: "One",
      sample2: "Two",
      sample3: "Three"
    }).make(
      join(JoinTypes.left, {
        sample2: "Dos",
        sample3: "Tres",
        sample4: "Quatro"
      })
    );

    expect(c.sample1).toBe("One");
    expect(c.sample2).not.toBeDefined();
    expect(c.sample3).not.toBeDefined();
    expect(c.sample4).not.toBeDefined();
  });

  test("join right", () => {
    var c = new Context({
      sample1: "One",
      sample2: "Two",
      sample3: "Three"
    }).make(
      join(JoinTypes.right, {
        sample2: "Dos",
        sample3: "Tres",
        sample4: "Quatro"
      })
    );

    expect(c.sample1).not.toBeDefined();
    expect(c.sample2).not.toBeDefined();
    expect(c.sample3).not.toBeDefined();
    expect(c.sample4).toBe("Quatro");
  });

  test("join middle none", () => {
    var c = new Context({
      sample1: "One",
      sample2: "Two",
      sample3: "Three"
    }).make(
      join(JoinTypes.left | JoinTypes.right, {
        sample2: "Dos",
        sample3: "Tres",
        sample4: "Quatro"
      })
    );

    expect(c.sample1).toBe("One");
    expect(c.sample2).not.toBeDefined();
    expect(c.sample3).not.toBeDefined();
    expect(c.sample4).toBe("Quatro");
  });

  test("join middle left", () => {
    var c = new Context({
      sample1: "One",
      sample2: "Two",
      sample3: "Three"
    }).make(
      join(JoinTypes.midLeft, {
        sample2: "Dos",
        sample3: "Tres",
        sample4: "Quatro"
      })
    );

    expect(c.sample1).not.toBeDefined();
    expect(c.sample2).toBe("Two");
    expect(c.sample3).toBe("Three");
    expect(c.sample4).not.toBeDefined();
  });

  test("join middle right", () => {
    var c = new Context({
      sample1: "One",
      sample2: "Two",
      sample3: "Three"
    }).make(
      join(JoinTypes.midRight, {
        sample2: "Dos",
        sample3: "Tres",
        sample4: "Quatro"
      })
    );

    expect(c.sample1).not.toBeDefined();
    expect(c.sample2).toBe("Dos");
    expect(c.sample3).toBe("Tres");
    expect(c.sample4).not.toBeDefined();
  });

  test("join middle merge", () => {
    var c = new Context({
      sample1: "One",
      sample2: "Two",
      sample3: {
        smile: "cheese"
      }
    }).make(
      join(JoinTypes.midMerge, {
        sample2: "Dos",
        sample3: {
          sorrir: "queijo"
        },
        sample4: "Quatro"
      })
    );

    expect(c.sample1).not.toBeDefined();
    expect(c.sample2).toBe("Dos");
    expect(c.sample3.smile).toBe("cheese");
    expect(c.sample3.sorrir).toBe("queijo");
    expect(c.sample4).not.toBeDefined();
  });
});
