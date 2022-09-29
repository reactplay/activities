/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
	darkMode: 'class',
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		fontFamily: {
			primary: ['Bebas Neue', 'cursive'],
			body: ['Roboto Mono', 'monospace'],
		},
		letterSpacing: {
			wild: '0.3rem',
		},
		extend: {
			colors: {
				'brand-hightlight': '#32f9e5',
				'brand-title': '#00F2FE',
				'brand-muted': '#ffffff99',
			},
			shadow: {
				simple: '0px 0px 16px 1px rgba(104, 253, 198, 0.4)',
			},
		},
	},
	plugins: [
		plugin(({ addVariant }) => {
			addVariant('selected', '&[selected="1"]');
		}),
	],
};
