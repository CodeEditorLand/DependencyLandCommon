/**
 * @module Response
 *
 */
export default type;
Type = (Message?: unknown, Status?: number) => Promise<Response>;

import type { Response } from "@cloudflare/workers-types/experimental/index.js";
