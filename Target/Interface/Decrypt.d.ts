export default interface Interface {
    (Data: Uint8Array, Key: JsonWebKey["k"], Vector: Uint8Array): Promise<Uint8Array>;
}
import type { JsonWebKey } from "@cloudflare/workers-types/experimental/index.js";
