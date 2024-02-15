import { Text } from '@react-email/components';

export const CardTitle = ({ text }: { text: string }) => {
	return (
		<Text className="m-0 mb-2.5 text-14 font-500 uppercase leading-18 text-neutral-400">
			{text}
		</Text>
	);
};
