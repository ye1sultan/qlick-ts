import { ContactSeller } from '../_components/contact-seller';
import { Signature } from '../_components/signature';
import { ConfidentialText, DefaultText } from '../_components/text';
import { Title } from '../_components/title';
import Layout from '../layout';
import { Code } from './_components/code';

interface User {
	name: string;
}

const user: User = {
	name: 'John Doe',
};

const Signup = () => {
	return (
		<Layout>
			<Title text="Activate your account" />
			<DefaultText>
				Hi, {user.name} <br />
				Thanks for singing up for your Qtap account. Here’s the code you’ll need
				you continue. Just copy it into the field on . The screen you just came
				from, and you’re ready to start creating your first page!
			</DefaultText>
			<Code code={1234} />
			<ConfidentialText />
			<Signature>
				Thank you! <br />
				Best, <br />
				The Qtap Team
			</Signature>
			<ContactSeller />
		</Layout>
	);
};

export default Signup;
