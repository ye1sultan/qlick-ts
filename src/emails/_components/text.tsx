import { Text } from '@react-email/components';
import { Link } from './link';

export const DefaultText = ({ children }: { children: React.ReactNode }) => {
	return (
		<Text className="m-0 mb-10 text-16 font-400 leading-20">{children}</Text>
	);
};

export const ConfidentialText = () => {
	return (
		<Text className="m-0 mb-10 text-16 font-400 leading-20">
			This is a confidential message. If someone requests you to share this
			<br /> email or code, or if you believe you received this message in
			error, please <br />
			<Link url="example.com" text="report it" />.
		</Text>
	);
};
