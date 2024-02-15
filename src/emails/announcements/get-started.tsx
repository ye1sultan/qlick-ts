import { Column, Img, Row, Section, Text } from '@react-email/components';
import { DefaultButton } from '../_components/button';
import { ContactSeller } from '../_components/contact-seller';
import { DefaultText } from '../_components/text';
import { Title } from '../_components/title';
import Layout from '../layout';
import { Link } from './_components/link';

interface User {
	name: string;
}

const user: User = {
	name: 'John Doe',
};

const GetStarted = () => {
	return (
		<Layout>
			<Title text="Welcome to Qtap! Let's Get Started! 🎉" />
			<DefaultText>
				Hello {user.name}, <br />
				We are glad to welcome you to Qtap!
			</DefaultText>
			<Section>
				<Text className="m-0 mb-6 text-16 font-400 leading-20">
					<span className="font-600">
						Here are some simple tips for setting up your Qtap page:
						<br />
					</span>
					First of all, share your unique link:
				</Text>
				<Link url="https://qtab.one/Evelina" />
				<Text className="m-0 mb-6 text-16 font-600 leading-20">
					Post this link on all your social networks so your followers know{' '}
					<br />
					where to find you!
				</Text>
			</Section>
			<Text className="m-0 mb-10 text-16 font-400 leading-20">
				<span className="font-600">
					Go to your account. Check out the features of Qtap:
					<br />
				</span>
				Sell your digital products: Add files, PDFs, templates, eBooks and more
				for sale directly from your profile link with one-click checkout.
			</Text>
			<Img
				src="https://picsum.photos/570/220"
				className="mb-10 rounded-18"
				alt="Image"
				width={570}
				height={220}
			/>
			<Section className="mb-4">
				<Text className="m-0 mb-6 text-16 font-600 leading-20">
					Get inspired to personalize your Qtap page. See how others are using
					these features to give their profiles a unique style. Take a look at
					some of our favorite examples below:
				</Text>
				<Link url="https://qtap.kz/naiza" />
				<Link url="https://qtap.kz/STEMMEDIAGROUP" />
				<Link url="https://qtap.kz/samsung" />
			</Section>
			<Text className="m-0 mb-10 text-16 font-400 leading-20">
				Discover all the possibilities - and welcome to the Qtap community!
			</Text>
			<Section className="mb-10">
				<Row>
					<Column align="center">
						<DefaultButton url="/">Go to edit page</DefaultButton>
					</Column>
				</Row>
			</Section>
			<ContactSeller />
		</Layout>
	);
};

export default GetStarted;
