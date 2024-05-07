/**
 * @module Response
 *
 */
export default (async (...Option: Parameters<Interface>) =>
	new Response(JSON.stringify(Option[0]), {
		status: Option[1] ?? 200,
		headers: {
			"Content-Type": "application/json;charset=utf-8",
		},
	})) satisfies Interface as Interface;

import type Interface from "../Interface/Response.js";

export const { Response } = await import(
	"@cloudflare/workers-types/experimental/index.js"
);
