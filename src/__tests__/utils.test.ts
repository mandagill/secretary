import { calculateAwayUntil } from "../utils";

describe("calculateAwayUntil", () => {
  it("defaults to finishing the workday", () => {
    calculateAwayUntil();
  });

  it("returns an epoch timestamp", () => {
    const untilTime = calculateAwayUntil();
  });
});
