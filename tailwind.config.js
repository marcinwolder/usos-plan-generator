/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'hours-light': '#eeeedd',
				'hours-dark': '#dedecd',
				days: '#9ca498',
				'lecture-border': '#7e96ac',
				'table-bg-light': '#ececec',
				'table-bg-dark': '#d8d8d8',
				'gray-font': '#646464',
			},
		},
	},
	plugins: [],
};
