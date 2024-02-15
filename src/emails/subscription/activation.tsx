import { Heading } from '@react-email/components';
import { ContactSeller } from '../_components/contact-seller';
import { Features } from '../_components/features';
import { Link } from '../_components/link';
import { Signature } from '../_components/signature';
import { DefaultText } from '../_components/text';
import Layout from '../layout';

interface User {
	name: string;
}

const user: User = {
	name: 'John Doe',
};

const Activation = () => {
	return (
		<Layout border>
			<Heading
				className="m-0 mb-[24px] bg-clip-text text-24 font-700 leading-28 text-transparent"
				style={{ ...gradientStyle }}
			>
				Congratulations! Your Qtap+ <br /> Subscription is Activated!{' '}
				<span className="m-0 text-black">🎉</span>
			</Heading>
			<DefaultText>
				Hi {user.name}, <br />
				Your subscription to Qtap+ has been successfully activated, granting you
				access to all the enhanced features of our platform.
			</DefaultText>
			<Features title="What awaits you with Qtap+:" btn="Go to edit page">
				<li>Get unlimited number of cards</li>
				<li>Get donations from your fans</li>
				<li>Sell tickets, digital content and publish premium content</li>
				<li>Get advanced insights about your page activity</li>
			</Features>
			<DefaultText>
				Your subscription will automatically renews at $23/month from February
				28, 2024, until canceled. To avoid being charged, you must cancel at
				least one day before each renewal date. To learn more or cancel,{' '}
				<Link url="example.com" text="review your subscription" />.
			</DefaultText>
			<Signature>
				Sincerely yours, <br />
				The Qtap Team
			</Signature>
			<ContactSeller />
		</Layout>
	);
};

export default Activation;

const gradientStyle = {
	backgroundColor: 'red',
	backgroundImage:
		'linear-gradient(91deg, rgba(244,0,15,1) 0%, rgba(46,0,177,1) 95%)',
};
