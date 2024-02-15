import { Text } from '@react-email/components';

export const Signature = ({ children }: { children: React.ReactNode }) => {
	return (
		<Text className="m-0 mb-10 text-16 font-400 leading-20">{children}</Text>
	);
};
