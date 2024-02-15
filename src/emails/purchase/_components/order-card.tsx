import { Column, Hr, Img, Row, Section, Text } from '@react-email/components';
import { CardTitle } from './card-title';

interface OrderCardProps {
	id: string;
	name: string;
	date: string;
	price?: number;
	fee?: number;
	total: string;
	imgUrl: string;
	title: string;
}

export const OrderCard = ({
	id,
	name,
	date,
	price,
	fee,
	total,
	imgUrl,
	title,
}: OrderCardProps) => {
	const imgHeight = price && fee ? 202 : 134;
	return (
		<>
			<CardTitle text={title} />
			<Section className="mb-6 rounded-18 bg-neutral-100 p-4">
				<Row>
					<Column className="w-[116px]">
						<Img
							src={imgUrl}
							alt={name}
							width={116}
							height={imgHeight}
							className="m-0 mr-4 rounded-12 object-fill p-0"
						/>
					</Column>
					<Column className="mt-0 w-full">
						<Row className="mb-3.5">
							<Column>
								<Text className="m-0 text-18 font-500 leading-22 text-neutral-700">
									{name}
								</Text>
							</Column>
							<Column>
								<Text className="m-0 text-end text-18 font-500 leading-22 text-neutral-700">
									$ {total}
								</Text>
							</Column>
						</Row>
						<Row className="mb-2.5">
							<Text className="m-0 text-16 font-400 leading-20 text-neutral-500">
								Transaction ID: {id}
							</Text>
						</Row>
						<Row className="mb-3.5">
							<Text className="m-0 text-16 font-400 leading-20 text-neutral-500">
								{date}
							</Text>
						</Row>
						<Hr className="mb-3.5" />
						{price && (
							<Row className="mb-3.5">
								<Column>
									<Text className="m-0 text-16 font-400 leading-20">
										Content price
									</Text>
								</Column>
								<Column>
									<Text className="m-0 text-end text-16 font-400 leading-20">
										$ {price.toFixed(2)}
									</Text>
								</Column>
							</Row>
						)}
						{fee && (
							<Row className="mb-3.5">
								<Column>
									<Text className="m-0 text-16 font-400 leading-20">
										Service fee
									</Text>
								</Column>
								<Column>
									<Text className="m-0 text-end text-16 font-400 leading-20">
										- $ {fee.toFixed(2)}
									</Text>
								</Column>
							</Row>
						)}
						<Row>
							<Column>
								<Text className="m-0 text-16 font-600 uppercase leading-20">
									Total
								</Text>
							</Column>
							<Column>
								<Text className="m-0 text-end text-16 font-600 leading-20">
									$ {total}
								</Text>
							</Column>
						</Row>
					</Column>
				</Row>
			</Section>
		</>
	);
};
