export default interface Interface {
    (Data: unknown, Key: string): Promise<Data>;
}
import type Data from "../Interface/Data.js";
