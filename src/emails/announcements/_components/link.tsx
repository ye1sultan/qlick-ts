import { Column, Row, Section, Text } from '@react-email/components';

export const Link = ({ url }: { url: string }) => {
	return (
		<Section className="mb-6 rounded-12 bg-neutral-100 p-4">
			<Row>
				<Column align="left">
					<Text className="m-0 text-18 font-400 leading-22 no-underline">
						{url}
					</Text>
				</Column>
			</Row>
		</Section>
	);
};
