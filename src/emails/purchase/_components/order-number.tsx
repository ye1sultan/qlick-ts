import { Text } from '@react-email/components';

export const OrderNumber = ({ order }: { order: string }) => {
	return (
		<Text className="m-0 mb-10 text-14 font-400 leading-18 text-neutral-400">
			Order #{order}
		</Text>
	);
};
