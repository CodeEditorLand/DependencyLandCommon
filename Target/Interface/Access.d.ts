export default interface Interface {
    (Key: JsonWebKey["k"], Identifier: ReturnType<Crypto["randomUUID"]>, KV: KVNamespace, View: string): unknown;
}
import type { JsonWebKey, KVNamespace } from "@cloudflare/workers-types/experimental/index.js";
