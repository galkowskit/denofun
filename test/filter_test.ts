import { assertEquals } from "../deps.ts";

import filter from "../lib/filter.ts";

function isLessThan5(n: number) {
  return n < 5;
}

Deno.test({
  name: "filter",
  fn(): void {
    assertEquals(filter(isLessThan5, [1, 2, 6, 8]), [1, 2]);
  },
});
