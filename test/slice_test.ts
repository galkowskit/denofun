import { assertEquals } from "../deps.ts";

import slice from "../lib/slice.ts";

const letterArray = ["a", "b", "c", "d", "e", "f", "g"];

Deno.test({
  name: "slice",
  fn(): void {
    assertEquals(slice(1, 3, letterArray), ["b", "c"]);
    assertEquals(
      slice(1, Infinity, letterArray),
      ["b", "c", "d", "e", "f", "g"],
    );
  },
});
