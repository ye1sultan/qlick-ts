import { Button, Section, Text } from '@react-email/components';

export const Features = ({
	title,
	btn,
	children,
}: {
	title: string;
	btn: string;
	children: React.ReactNode;
}) => {
	return (
		<Section className="mb-10 rounded-12 bg-neutral-100 p-4">
			<Text className="m-0 mb-4 text-16 font-500 leading-20">{title}</Text>
			<ul className="m-0 mb-6 text-16 font-400 leading-20">{children}</ul>
			<Button
				className="m-0 w-full cursor-pointer rounded-12 bg-cover bg-right bg-no-repeat py-3.5 text-center text-16 font-500 leading-20 text-white"
				style={{ ...buttonStyle }}
			>
				{btn}
			</Button>
		</Section>
	);
};

const buttonStyle = {
	backgroundColor: 'red',
	backgroundImage:
		'url(https://s3-alpha-sig.figma.com/img/9747/158a/73eada9fac8717e3dcdf2afad0384e78?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A5YrhLj4MjGMsQZKXtaP2nbsCEVhaNgbDJ19OVa9~LDU~CH2VPZqnOr5mhaEOTW-mxepboy-G4m7-J0xzVfbP2Sc0O3cKjGnnkaz-3M6g0QYmFHu5oiH2LKIl9rbR9Bn-fFCe0xmRioRsphihi65t9S7o~lcCB15JVhdKRzIGsQVYrg8BhJEC7FmTvng5~cEf46FtdHiSPzTuMk7FlSq-Vq9dO~5PRVyIryoYhw3Qbc~zc2CX0iBmn0DueBIehMg3ocnnqjUEIOYKay~wCDAxpkYfAvFUAoQkp9YIe~mGDEQNLmNFgdL-9fxZKlHL0PgXGHghXv1Jc18feBQdaSI8g__)',
};
