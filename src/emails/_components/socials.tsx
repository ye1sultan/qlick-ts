import { Column, Img, Link, Row, Section } from '@react-email/components';

export const Socials = () => {
	return (
		<Section>
			<Row className="w-full max-w-[208px]">
				<Social url={'https://iili.io/J1li9HB.png'} alt="Linkedin" />
				<Social url={'https://iili.io/J1liEb9.png'} alt="Linkedin" />
				<Social url={'https://iili.io/J1liUWg.png'} alt="Linkedin" />
				<Social url={'https://iili.io/J1libXn.png'} alt="Linkedin" />
			</Row>
		</Section>
	);
};

const Social = ({ url, alt }: { url: string; alt?: string }) => {
	return (
		<Column align="center">
			<Link href="/" className="m-0">
				<Img
					src={url}
					alt={alt || 'Social Icon'}
					className="m-0 rounded-full bg-neutral-900 p-2.5"
					width={24}
					height={24}
				/>
			</Link>
		</Column>
	);
};
