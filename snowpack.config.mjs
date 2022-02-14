/** @type {import("snowpack").SnowpackUserConfig } */
const exports = {
	mount: {
		src: {url: '/', dot: true},
		/* ... */
	},
	plugins: [
		/* ... */
		'@snowpack/plugin-postcss',
	],
	routes: [
		/* Enable an SPA Fallback in development: */
		// {"match": "routes", "src": ".*", "dest": "/index.html"},
	],
	optimize: {
		/* Example: Bundle your final build: */
		// "bundle": true,
	},
	packageOptions: {
		/* ... */
	},
	devOptions: {
		/* ... */
	},
	buildOptions: {
		/* ... */
	},
};
export default exports;
