import { beforeEach, describe, it } from "vitest";

beforeEach(async () => {
  new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
});

describe("", () => {
  it("", async () => {
    new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  });
});
