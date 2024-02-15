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

const Resolved = () => {
	return (
		<Layout>
			<Title text="Successful Resolution of Your Inquiry" />
			<DefaultText>Hi {user.name}.</DefaultText>
			<Message
				name={user.name}
				message={user.message}
				imgUrl={user.imgUrl}
				title="your application"
			/>
			<DefaultText>
				We are pleased to inform you that we have successfully resolved your
				recent support request regarding account settings. Our team has
				diligently worked to address the issue, and it has now been resolved to
				ensure smooth functionality of your Qtap account.
			</DefaultText>
			<DefaultText>
				If you have any further questions or if there&apos;s anything else we
				can assist you with, please don&apos;t hesitate to reach out. We value
				your feedback and are here to help.
			</DefaultText>
			<Signature>
				Best regards, <br />
				The Qtap Support Team
			</Signature>
			<ContactSeller />
		</Layout>
	);
};

export default Resolved;
