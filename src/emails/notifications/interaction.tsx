import { Column, Row, Section } from '@react-email/components';
import { DefaultButton } from '../_components/button';
import { ContactSeller } from '../_components/contact-seller';
import { Link } from '../_components/link';
import { Signature } from '../_components/signature';
import { DefaultText } from '../_components/text';
import { Title } from '../_components/title';
import Layout from '../layout';

const user: { name: string } = {
	name: 'John Doe',
};

const interactedUser: { name: string } = {
	name: 'Jane Clause',
};

const Interaction = () => {
	return (
		<Layout>
			<Title text="New interactions with your page" />
			<DefaultText>Hi {user.name}</DefaultText>
			<DefaultText>
				We want to inform you that there has been a new event on your Qtap page.{' '}
				<Link url="example.com" text={interactedUser.name} /> took action by
				sharing a link to your profile.
			</DefaultText>
			<Section className="mb-10">
				<Row>
					<Column align="center">
						<DefaultButton url="/">View your page</DefaultButton>
					</Column>
				</Row>
			</Section>
			<Signature>
				Best regards, <br />
				The Qtap Team
			</Signature>
			<ContactSeller />
		</Layout>
	);
};

export default Interaction;
