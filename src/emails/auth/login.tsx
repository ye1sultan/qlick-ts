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

const Login = () => {
	return (
		<Layout>
			<Title text="Verify your Qtap account" />
			<DefaultText>
				Hi, {user.name} <br />A request has been made to verify your Qtap
				account. Please enter the OTP within 10 minutes below to authenticate
				your account.
			</DefaultText>
			<Code code={1234} />
			<ConfidentialText />
			<Signature>
				Thank you! Best, <br /> The Qtap Team
			</Signature>
			<ContactSeller />
		</Layout>
	);
};

export default Login;
