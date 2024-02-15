import { Img, Text } from '@react-email/components';
import { ContactSeller } from '../_components/contact-seller';
import { Features } from '../_components/features';
import { Signature } from '../_components/signature';
import { Title } from '../_components/title';
import Layout from '../layout';

const Update = () => {
	return (
		<Layout>
			<Title text='Update on Qtap: "Donate" Tile Now Available!' />
			<Text className="m-0 mb-10 text-16 font-400 leading-20">
				We are excited to inform you about the latest update on Qtap! 🚀 Now, we
				have introduced a new feature – the &quot;Donate&quot; tile. This means
				you can easily send and receive donations directly through our platform.
			</Text>
			<Img
				src="https://picsum.photos/570/220"
				className="mb-10 rounded-18"
				alt="Image"
				width={570}
				height={220}
			/>
			<Features title='Key benefits of the "Donate" tile:' btn="Get Qtap+">
				<li>
					<span className="font-500">Simple Financial Transactions:</span> Now
					you can conduct financial transactions right on your page.
				</li>
				<li>
					<span className="font-500">User-Friendly Interface:</span> Intuitively
					designed for maximum comfort.
				</li>
				<li>
					<span className="font-500">Real-Time Tracking:</span> Keep track of
					donations in real-time.
				</li>
			</Features>
			<Img
				src="https://picsum.photos/571/220"
				className="mb-10 rounded-18"
				alt="Image"
				width={570}
				height={220}
			/>
			<Text className="m-0 mb-10 text-16 font-400 leading-20">
				Get started with receiving donations now by activating the
				&quot;Donate&quot; tile!
			</Text>
			<Signature>
				Best regards, <br />
				The Qtap Support Team
			</Signature>
			<ContactSeller />
		</Layout>
	);
};

export default Update;
