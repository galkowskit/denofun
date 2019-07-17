import curry from "./curry.ts";

/**
 * **tail** returns all elements of the given array or string except the first
 * @param xs input array or string
 * @returns all elements of the input array or string excluding the first element
 */
function tail<T>(xs: T[] | string): T[] | string {
    return xs.slice(1);
}

export default curry(tail);
