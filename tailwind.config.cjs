/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			mono: ["'Source Code Pro', monospace"],
			serif: ["Space mono"],
		},
		extend: {},
	},
	plugins: [],
};
