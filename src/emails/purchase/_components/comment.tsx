import { Section, Text } from '@react-email/components';

export const Comment = ({ comment }: { comment: string }) => {
	return (
		<Section className="mb-6 rounded-12 bg-neutral-100 p-4">
			<Text className="m-0 mb-2.5 text-12 font-400 leading-16 text-neutral-500">
				Additional comment:
			</Text>
			<Text className="m-0 text-14 font-400 leading-18 text-neutral-700">
				{comment}
			</Text>
		</Section>
	);
};
