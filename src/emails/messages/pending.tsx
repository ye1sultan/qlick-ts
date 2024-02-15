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

const Pending = () => {
	return (
		<Layout>
			<Title text="Update on Your Support Request" />
			<DefaultText>
				Hi {user.name}, <br />
				Your request is under consideration.
			</DefaultText>
			<Message
				name={user.name}
				message={user.message}
				imgUrl={user.imgUrl}
				title="your application"
			/>
			<DefaultText>
				We would like to inform you that your support request regarding account
				settings is currently in progress with our team. Rest assured, we are
				actively working on resolving the issue and will provide you with the
				latest information at the earliest opportunity.
			</DefaultText>
			<DefaultText>
				We appreciate your patience and understanding as we work through this
				process. If you have any additional details or concerns to share, feel
				free to respond to this email.
			</DefaultText>
			<Signature>
				Best regards, <br />
				The Qtap Support Team
			</Signature>
			<ContactSeller />
		</Layout>
	);
};

export default Pending;
