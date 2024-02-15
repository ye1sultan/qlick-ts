import { CardTitle } from '@/emails/purchase/_components/card-title';
import { Column, Img, Row, Section, Text } from '@react-email/components';

export const Message = ({
	name,
	message,
	imgUrl,
	title,
}: {
	name: string;
	message: string;
	imgUrl: string;
	title: string;
}) => {
	return (
		<>
			<CardTitle text={title} />
			<Section className="mb-10 rounded-12 bg-neutral-100 p-4">
				<Row>
					<Column className="w-12">
						<Img
							src={imgUrl}
							alt={name}
							width={48}
							height={48}
							className="m-0 mr-4 rounded-full p-0"
						/>
					</Column>
					<Column className="w-full">
						<Text className="m-0 mb-1 text-12 font-400 leading-16 text-neutral-500">
							{name}
						</Text>
						<Text className="m-0 text-14 font-400 leading-18 text-neutral-700">
							{message}
						</Text>
					</Column>
				</Row>
			</Section>
		</>
	);
};
