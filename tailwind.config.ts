import type { Config } from 'tailwindcss';

const config: Config = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	prefix: '',
	theme: {
		// container: {
		// 	center: true,
		// 	screens: {
		// 		mob: '100%',
		// 		tab: '520px',
		// 	},
		// },
		// screens: {
		// 	mob: '300',
		// 	tab: '520px',
		// 	ctrl: '720px',
		// 	des: '1024px',
		// },
		// borderRadius: {
		// 	0: '0',
		// 	6: '0.375rem',
		// 	10: '0.625rem',
		// 	12: '0.75rem',
		// 	16: '1rem',
		// 	18: '1.125rem',
		// 	24: '1.5rem',
		// 	full: '9999px',
		// 	inherit: 'inherit',
		// },
		// lineHeight: {
		// 	0: '0',
		// 	16: '1rem',
		// 	18: '1.125rem',
		// 	20: '1.25rem',
		// 	22: '1.375rem',
		// 	24: '1.5rem',
		// 	28: '1.75rem',
		// 	30: '1.875rem',
		// 	32: '2rem',
		// 	36: '2.25rem',
		// },
		// fontWeight: {
		// 	100: '100',
		// 	200: '200',
		// 	300: '300',
		// 	400: '400',
		// 	500: '500',
		// 	600: '600',
		// 	700: '700',
		// 	800: '800',
		// 	900: '900',
		// },
		// fontSize: {
		// 	12: '0.75rem',
		// 	14: '0.875rem',
		// 	16: '1rem',
		// 	18: '1.125rem',
		// 	20: '1.25rem',
		// 	22: '1.375rem',
		// 	24: '1.5rem',
		// 	26: '1.625rem',
		// 	28: '1.75rem',
		// 	30: '1.875rem',
		// 	32: '2rem',
		// },
		// fontFamily: {
		// 	golos: [
		// 		'var(--font-golos-text)',
		// 		'Sf Pro',
		// 		'inter',
		// 		'Arial',
		// 		'sans-serif',
		// 	],
		// },
		// colors: {
		// 	transparent: 'transparent',
		// 	white: '#FFFFFF',
		// 	black: '#000000',
		// 	stripe: {
		// 		stroke: '#6772E5',
		// 		fill: '#E4E6FA',
		// 		background: '#525f7f',
		// 	},
		// 	neutral: {
		// 		0: '#FFFFFF',
		// 		50: '#FAFAFA',
		// 		100: '#F5F5F5',
		// 		200: '#E7E7E7',
		// 		300: '#D7D7D7',
		// 		400: '#C3C3C3',
		// 		450: '#AAAAAA',
		// 		500: '#737373',
		// 		700: '#404040',
		// 		900: '#171717',
		// 	},
		// 	red: {
		// 		50: '#FFEBEC',
		// 		200: '#F8A8AD',
		// 		500: '#ED2531',
		// 		700: '#8E161D',
		// 	},
		// 	rose: {
		// 		200: '#FF5777',
		// 		400: '#FF2D55',
		// 		600: '#CC2444',
		// 	},
		// 	amber: {
		// 		50: '#FFEACD',
		// 		200: '#FFAA33',
		// 		400: '#FF9500',
		// 		600: '#CC7700',
		// 	},
		// 	emerald: {
		// 		50: '#DEFFE6',
		// 		200: '#5DD27A',
		// 		400: '#34C759',
		// 		600: '#2A9F47',
		// 	},
		// 	blue: {
		// 		50: '#CAECFF',
		// 		200: '#99DAFF',
		// 		500: '#00A3FF',
		// 		700: '#006299',
		// 	},
		// 	teal: {
		// 		200: '#7BD3FB',
		// 		400: '#5AC8FA',
		// 		600: '#48A0C8',
		// 	},
		// 	indigo: {
		// 		50: '#E4E6FA',
		// 		200: '#7978DE',
		// 		400: '#5856D6',
		// 		600: '#4645AB',
		// 	},
		// 	purple: {
		// 		200: '#BF75E5',
		// 		400: '#AF52DE',
		// 		600: '#8C42B2',
		// 	},
		// 	pink: {
		// 		500: '#DE369D',
		// 	},
		// 	orange: {
		// 		500: '#F75B28',
		// 	},
		// 	yellow: {
		// 		500: '#FFD749',
		// 	},
		// 	green: {
		// 		500: '#00AC67',
		// 	},
		// 	'middle-green': {
		// 		500: '#A5CC6B',
		// 	},
		// 	ultramarine: {
		// 		500: '#5200FF',
		// 	},
		// 	'slate-blue': {
		// 		500: '#6772E5',
		// 	},
		// 	brown: {
		// 		500: '#8E4844',
		// 	},
		// },
		extend: {},
	},
	plugins: [require('tailwindcss-animate')],
};

export default config;
