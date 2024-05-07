/**
 * @module Redirect
 *
 */
export default (async (...Option: Parameters<Interface>) =>
	Response.redirect(
		Option[0] ?? "",
		Option[1] ?? 302,
	)) satisfies Interface as Interface;

import type Interface from "../Interface/Redirect.js";

export const { Response } = await import(
	"@cloudflare/workers-types/experimental/index.js"
);
