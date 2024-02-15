import { ContactSeller } from '../_components/contact-seller';
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

const Notification = () => {
	return (
		<Layout>
			<Title text="File Uploaded Successfully on Qtap" />
			<DefaultText>Hi {user.name}</DefaultText>
			<DefaultText>
				We&apos;re pleased to inform you that your file has been successfully
				uploaded to your Qtap account. You can set your notification preferences
				in the “Notifications” section of the platform. Thank you for using
				Qtap!
			</DefaultText>
			<Signature>
				Best regards, <br />
				The Qtap Team
			</Signature>
			<ContactSeller />
		</Layout>
	);
};

export default Notification;
