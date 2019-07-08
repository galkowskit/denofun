import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

import reduce from './reduce.ts';

function add(a, b) {
    return a + b;
}

test({
    name: "reduce",
    fn(): void {
        assertEquals(reduce(add, 0, [1, 2, 5]), 8);
        assertEquals(reduce(add, 0)([1, 2, 5]), 8);
        assertEquals(reduce(add)(0)([]), 0);
    }
})
