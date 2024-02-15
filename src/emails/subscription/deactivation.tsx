import { ContactSeller } from '../_components/contact-seller';
import { Features } from '../_components/features';
import { Link } from '../_components/link';
import { Signature } from '../_components/signature';
import { DefaultText } from '../_components/text';
import { Title } from '../_components/title';
import Layout from '../layout';

interface User {
	name: string;
}

const user: User = {
	name: 'John Doe',
};

const Deactivation = () => {
	return (
		<Layout>
			<Title text="Your Qtap+ Subscription Has Been Deactivated" />
			<DefaultText>
				Hi {user.name}, <br />
				We confirm that your request to deactivate your Qtap+ subscription has
				been successfully processed. If you have any questions or change your
				mind, feel free to reach out to our{' '}
				<Link url="example.com" text="support team" />.
			</DefaultText>
			<DefaultText>
				Thank you for using Qtap+. We hope to see you again in the future.
			</DefaultText>
			<Features title="What do you get with Qtap+:" btn="Get Qtap+">
				<li>Get unlimited number of cards</li>
				<li>Get donations from your fans</li>
				<li>Sell tickets, digital content and publish premium content</li>
				<li>Get advanced insights about your page activity</li>
			</Features>
			<Signature>
				Best regards, <br />
				The Qtap Team
			</Signature>
			<ContactSeller />
		</Layout>
	);
};

export default Deactivation;
