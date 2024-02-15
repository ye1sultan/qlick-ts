import { Column, Row, Section } from '@react-email/components';
import { DefaultButton } from '../_components/button';
import { ContactSeller } from '../_components/contact-seller';
import { DefaultText } from '../_components/text';
import { Title } from '../_components/title';
import Layout from '../layout';
import { Comment } from './_components/comment';
import { OrderCard } from './_components/order-card';
import { OrderNumber } from './_components/order-number';
import { UserCard } from './_components/user-card';

interface Buyer {
	name: string;
	headline: string;
	email: string;
	imgUrl: string;
}

interface Order {
	orderId: string;
	orderName: string;
	transactionId: string;
	name: string;
	date: string;
	price: number;
	fee: number;
	imgUrl: string;
	comment?: string;
}

const buyer: Buyer = {
	name: 'John Doe',
	headline: '@johndoe',
	email: 'johndoe@gmail.com',
	imgUrl: 'https://picsum.photos/200/300',
};

const order: Order = {
	orderId: '5A4E-F2B5',
	orderName: 'DailyFresh',
	transactionId: '1806790905',
	name: 'DailyFresh',
	date: 'Aug 21, 2021',
	price: 8.0,
	fee: 2.0,
	imgUrl: 'https://picsum.photos/200/400',
	comment:
		'Absolutely thrilled with my purchase! The quality exceeded my expectations and the attention to detail is evident. The content is engaging, well-organized, and truly unique.',
};

const Order = () => {
	return (
		<Layout>
			<OrderNumber order={order.orderId} />
			<Title text={`New order on ${order.orderName}`} />
			<DefaultText>
				Hi {buyer.name}, <br />
				Thanks for your purchase! Here are the order details:
			</DefaultText>
			<OrderCard
				id={order.transactionId}
				name={order.name}
				date={order.date}
				price={order.price}
				fee={order.fee}
				total={(order.price + order.fee).toFixed(2)}
				imgUrl={order.imgUrl}
				title="order summary"
			/>
			<UserCard
				name={buyer.name}
				headline={buyer.headline}
				email={buyer.email}
				imgUrl={buyer.imgUrl}
				title="buyer"
				btn="Contact buyer"
			/>
			{order.comment && <Comment comment={order.comment} />}
			<Section className="my-10">
				<Row>
					<Column align="right">
						<DefaultButton url="/">View your product card</DefaultButton>
					</Column>
					<Column align="left">
						<DefaultButton url="/">Visit Stripe Dashboard</DefaultButton>
					</Column>
				</Row>
			</Section>
			<ContactSeller />
		</Layout>
	);
};

export default Order;
