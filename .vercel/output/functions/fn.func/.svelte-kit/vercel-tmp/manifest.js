export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png","fonts/.DS_Store","fonts/Brandon-Grotesque-Bold.otf","fonts/Brandon-Grotesque-Regular.otf","fonts/GaramondPremrPro-Bd.ttf","fonts/GaramondPremrPro-Bd.woff","fonts/GaramondPremrPro-Bd.woff2","fonts/GaramondPremrPro-It.ttf","fonts/GaramondPremrPro-It.woff","fonts/GaramondPremrPro-It.woff2","fonts/GaramondPremrPro-MedIt.ttf","fonts/GaramondPremrPro-MedIt.woff","fonts/GaramondPremrPro-MedIt.woff2","fonts/GaramondPremrPro-SmbdItCapt.ttf","fonts/GaramondPremrPro-SmbdItCapt.woff","fonts/GaramondPremrPro-SmbdItCapt.woff2","fonts/GaramondPremrPro-SmbdSubh.ttf","fonts/GaramondPremrPro-SmbdSubh.woff","fonts/GaramondPremrPro-SmbdSubh.woff2","fonts/GaramondPremrPro.ttf","fonts/GaramondPremrPro.woff","fonts/GaramondPremrPro.woff2"]),
	mimeTypes: {".png":"image/png",".otf":"font/otf",".ttf":"font/ttf",".woff":"font/woff",".woff2":"font/woff2"},
	_: {
		client: {"start":"_app/immutable/entry/start.Rk8P_bVX.js","app":"_app/immutable/entry/app.j43c8tR8.js","imports":["_app/immutable/entry/start.Rk8P_bVX.js","_app/immutable/chunks/entry.qjYP5RXT.js","_app/immutable/chunks/scheduler.bmu_Hobj.js","_app/immutable/chunks/index.rzhwxhQr.js","_app/immutable/entry/app.j43c8tR8.js","_app/immutable/chunks/scheduler.bmu_Hobj.js","_app/immutable/chunks/index.v0vBcyvT.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api/invites",
				pattern: /^\/api\/invites\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/invites/_server.ts.js'))
			},
			{
				id: "/api/subscribe",
				pattern: /^\/api\/subscribe\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/subscribe/_server.ts.js'))
			},
			{
				id: "/gallery",
				pattern: /^\/gallery\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/registry",
				pattern: /^\/registry\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/[code]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"code","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
