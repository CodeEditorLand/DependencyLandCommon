var f=async(...[e])=>{if(typeof e=="string")return e;const t=new Map;if(typeof e=="object")for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(typeof e[r]=="object"&&!Array.isArray(e[r])?t.set(r,await(await import("./Get.js")).default(e[r])):t.set(r,e[r]));return t};export{f as default};
