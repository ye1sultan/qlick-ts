import { ContactSeller } from '../_components/contact-seller';
import { Signature } from '../_components/signature';
import { DefaultText } from '../_components/text';
import { Title } from '../_components/title';
import Layout from '../layout';
import { Message } from './_components/message';

const user = {
	name: 'John Doe',
	message: 'Having trouble with my account settings, need assistance ASAP',
	imgUrl: 'https://picsum.photos/200/300',
};

const Accepted = () => {
	return (
		<Layout>
			<Title text="Qtap Support Email" />
			<DefaultText>
				Hi {user.name}, <br />
				Your request has been received.
			</DefaultText>
			<Message
				name={user.name}
				message={user.message}
				imgUrl={user.imgUrl}
				title="your application"
			/>
			<DefaultText>
				We&apos;re pleased to see your inquiry at Qtap support. Your request has
				been received, and our team is already working on resolving it.
				<br />
				<br />
				We understand the importance of providing quick and quality assistance.
				Our goal is to support you with the necessary help in the shortest time
				possible.
				<br />
				<br />
				If we need additional information, we&apos;ll get in touch with you.
				Thank you for your patience.
			</DefaultText>
			<Signature>
				Best regards, <br />
				The Qtap Support Team
			</Signature>
			<ContactSeller />
		</Layout>
	);
};

export default Accepted;
