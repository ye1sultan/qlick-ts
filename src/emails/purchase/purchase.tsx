import { Column, Section } from '@react-email/components';
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

interface Seller {
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

const seller: Seller = {
	name: 'Davis Chloe',
	headline: '@davischloe',
	email: 'davischloe@gmail.com',
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
};

const Purchase = () => {
	return (
		<Layout>
			<OrderNumber order={order.orderId} />
			<Title text="Thank you for your purchase!" />
			<DefaultText>
				Hi {buyer.name}, <br />
				Exciting news! You&apos;ve got a new sale on Qtap. Here are the details:
			</DefaultText>
			<OrderCard
				id={order.transactionId}
				name={order.name}
				date={order.date}
				total={(order.price + order.fee).toFixed(2)}
				imgUrl={order.imgUrl}
				title="order summary"
			/>
			<UserCard
				name={seller.name}
				headline={seller.headline}
				email={seller.email}
				imgUrl={seller.imgUrl}
				title="buyer"
				btn={`Visit ${seller.name} page`}
			/>
			{order.comment && <Comment comment={order.comment} />}
			<Section className="mt-10">
				<Column align="center">
					<DefaultButton url="/">Go to your purchases</DefaultButton>
				</Column>
			</Section>
			<ContactSeller />
		</Layout>
	);
};

export default Purchase;
