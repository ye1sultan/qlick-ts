import { Column, Img, Link, Row, Section, Text } from '@react-email/components';
import { CardTitle } from './card-title';

interface UserCardProps {
	name: string;
	headline: string;
	email: string;
	imgUrl: string;
	title: string;
	btn: string;
}

export const UserCard = ({
	name,
	headline,
	email,
	imgUrl,
	title,
	btn,
}: UserCardProps) => {
	return (
		<>
			<CardTitle text={title} />
			<Section className="mb-2.5 rounded-12 bg-neutral-100 p-4">
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
							{headline}
						</Text>
					</Column>
					<Column className="min-w-24">
						<Link
							href={`mailto:${email}`}
							className="m-0 ml-4 whitespace-nowrap text-12 font-400 leading-16 text-blue-500 underline"
						>
							{btn}
						</Link>
					</Column>
				</Row>
			</Section>
		</>
	);
};
