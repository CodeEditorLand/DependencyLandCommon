/**
 * @module Redirect
 *
 */
export default type;
Type = (URL?: string, Status?: number) => Promise<Response>;

import type { Response } from "@cloudflare/workers-types/experimental/index.js";
