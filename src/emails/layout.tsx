import {
	Column,
	Container,
	Head,
	Html,
	Img,
	Section,
	Tailwind,
} from '@react-email/components';
import { Socials } from './_components/socials';

const background =
	'https://s3-alpha-sig.figma.com/img/d4bd/2ec9/19e33adab68eacb0fe4da3479667e8d0?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qYNbxA41BRUSDFbh5ryR52~mn2Ctw6cqwzQT6Cpo46inmSzO3UKtXgXLbSvw0Hz~EPVp4S9Nzggh8TJlxnTvB5z3DFqpmhtvSY~dvPovXpxjbDIWci~58fQDU5M2x0cedjDHiIDwYVNi77C9m8b3eSGajxLB8~Tm~1L5JGVGztj-X3RDTJf8M~k6pkLdfxPiJdB33utAeoTHrtksjwsBToBWZyEKi-hZcsS9x578b4f21LYXjsdEhGjub1FlbRoxq8XaDOjoJayw6qD53T4CiyoZ-Oj-wFk1-x7mMQeq81QdahfGVjlk~SPCW-SdvEGWXQBToDXnqyQ4Dyovg2AOZA__';

const themeConfig = {
	theme: {
		container: {
			center: true,
			screens: {
				mob: '100%',
				tab: '520px',
			},
		},
		screens: {
			mob: '300',
			tab: '520px',
			ctrl: '720px',
			des: '1024px',
		},
		borderRadius: {
			0: '0',
			6: '0.375rem',
			10: '0.625rem',
			12: '0.75rem',
			16: '1rem',
			18: '1.125rem',
			24: '1.5rem',
			full: '9999px',
			inherit: 'inherit',
		},
		lineHeight: {
			0: '0',
			16: '1rem',
			18: '1.125rem',
			20: '1.25rem',
			22: '1.375rem',
			24: '1.5rem',
			28: '1.75rem',
			30: '1.875rem',
			32: '2rem',
			36: '2.25rem',
		},
		fontWeight: {
			100: '100',
			200: '200',
			300: '300',
			400: '400',
			500: '500',
			600: '600',
			700: '700',
			800: '800',
			900: '900',
		},
		fontSize: {
			12: '0.75rem',
			14: '0.875rem',
			16: '1rem',
			18: '1.125rem',
			20: '1.25rem',
			22: '1.375rem',
			24: '1.5rem',
			26: '1.625rem',
			28: '1.75rem',
			30: '1.875rem',
			32: '2rem',
		},
		fontFamily: {
			golos: [
				'var(--font-golos-text)',
				'Sf Pro',
				'inter',
				'Arial',
				'sans-serif',
			],
		},
		colors: {
			transparent: 'transparent',
			white: '#FFFFFF',
			black: '#000000',
			stripe: {
				stroke: '#6772E5',
				fill: '#E4E6FA',
				background: '#525f7f',
			},
			neutral: {
				0: '#FFFFFF',
				50: '#FAFAFA',
				100: '#F5F5F5',
				200: '#E7E7E7',
				300: '#D7D7D7',
				400: '#C3C3C3',
				450: '#AAAAAA',
				500: '#737373',
				700: '#404040',
				900: '#171717',
			},
			red: {
				50: '#FFEBEC',
				200: '#F8A8AD',
				500: '#ED2531',
				700: '#8E161D',
			},
			rose: {
				200: '#FF5777',
				400: '#FF2D55',
				600: '#CC2444',
			},
			amber: {
				50: '#FFEACD',
				200: '#FFAA33',
				400: '#FF9500',
				600: '#CC7700',
			},
			emerald: {
				50: '#DEFFE6',
				200: '#5DD27A',
				400: '#34C759',
				600: '#2A9F47',
			},
			blue: {
				50: '#CAECFF',
				200: '#99DAFF',
				500: '#00A3FF',
				700: '#006299',
			},
			teal: {
				200: '#7BD3FB',
				400: '#5AC8FA',
				600: '#48A0C8',
			},
			indigo: {
				50: '#E4E6FA',
				200: '#7978DE',
				400: '#5856D6',
				600: '#4645AB',
			},
			purple: {
				200: '#BF75E5',
				400: '#AF52DE',
				600: '#8C42B2',
			},
			pink: {
				500: '#DE369D',
			},
			orange: {
				500: '#F75B28',
			},
			yellow: {
				500: '#FFD749',
			},
			green: {
				500: '#00AC67',
			},
			'middle-green': {
				500: '#A5CC6B',
			},
			ultramarine: {
				500: '#5200FF',
			},
			'slate-blue': {
				500: '#6772E5',
			},
			brown: {
				500: '#8E4844',
			},
		},
		extend: {},
	},
};

const Layout = ({
	children,
	border,
}: {
	children: React.ReactNode;
	border?: boolean;
}) => {
	return (
		<Html lang="en">
			<Head>
				<Font
					fontFamily="Golos Text"
					fallbackFontFamily="sans-serif"
					webFont={{
						url: 'https://fonts.gstatic.com/s/golostext/v4/q5uCsoe9Lv5t7Meb31EcExN8hK5SAMo.woff2',
						format: 'woff2',
					}}
					fontWeight="400, 500, 600, 700, 800, 900"
				/>
			</Head>
			<Tailwind config={themeConfig}>
				<Container
					className={`mx-auto w-full max-w-[778px] rounded-[20px] border-2 border-solid border-neutral-400 bg-center bg-no-repeat px-2 py-16 text-neutral-900`}
					style={{ backgroundSize: '100% 147%', backgroundImage: `url(${background})` }}
				>
					<Section>
						<Column align="center">
							<Img
								src={'https://iili.io/J1l6rTF.png'}
								alt="Qtap"
								className="m-0 mb-10"
							/>
						</Column>
					</Section>
					<Section
						align="center"
						className="m-0 mx-auto mb-10 w-full max-w-[650px] rounded-18"
						style={{
							backgroundImage: border
								? 'url(https://s3-alpha-sig.figma.com/img/9747/158a/73eada9fac8717e3dcdf2afad0384e78?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A5YrhLj4MjGMsQZKXtaP2nbsCEVhaNgbDJ19OVa9~LDU~CH2VPZqnOr5mhaEOTW-mxepboy-G4m7-J0xzVfbP2Sc0O3cKjGnnkaz-3M6g0QYmFHu5oiH2LKIl9rbR9Bn-fFCe0xmRioRsphihi65t9S7o~lcCB15JVhdKRzIGsQVYrg8BhJEC7FmTvng5~cEf46FtdHiSPzTuMk7FlSq-Vq9dO~5PRVyIryoYhw3Qbc~zc2CX0iBmn0DueBIehMg3ocnnqjUEIOYKay~wCDAxpkYfAvFUAoQkp9YIe~mGDEQNLmNFgdL-9fxZKlHL0PgXGHghXv1Jc18feBQdaSI8g__)'
								: 'none',
							padding: border ? '3px' : '0',
						}}
					>
						<Section className="w-full rounded-[15px] bg-white px-4 py-10">
							<Section className="mx-auto w-full max-w-[570px]">
								{children}
							</Section>
						</Section>
					</Section>
					<Socials />
				</Container>
			</Tailwind>
		</Html>
	);
};

const Font = ({
	webFont,
	fontStyle = 'normal',
	fontFamily,
	fontWeight = 400,
	fallbackFontFamily,
}: {
	webFont: any;
	fontStyle?: string;
	fontFamily: string;
	fontWeight?: number | string;
	fallbackFontFamily: string | string[];
}) => {
	const src = webFont
		? `src: url(${webFont.url}) format(${webFont.format});`
		: '';

	return (
		<style>
			{`
          @font-face {
              font-style: ${fontStyle};
              font-family: ${fontFamily};
              font-weight: ${fontWeight};
              mso-font-alt: ${Array.isArray(fallbackFontFamily) ? fallbackFontFamily[0] : fallbackFontFamily};
              ${src}
          }

          * {
              font-family: ${fontFamily}, ${Array.isArray(fallbackFontFamily) ? fallbackFontFamily.join(', ') : fallbackFontFamily};
          }
          `}
		</style>
	);
};

export default Layout;
