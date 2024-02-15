import { Text } from '@react-email/components';
import { Link } from './link';

export const ContactSeller = () => {
	return (
		<Text className="m-0 mt-6 text-14 font-400 leading-18 text-neutral-500">
			If you have any questions, contact the seller at{' '}
			<Link url="mailto: niyaztaye@gmail.com" text="email@email.com" />.
		</Text>
	);
};
