

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/registry/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.q8AKXn7p.js","_app/immutable/chunks/scheduler.bmu_Hobj.js","_app/immutable/chunks/index.v0vBcyvT.js"];
export const stylesheets = [];
export const fonts = [];
