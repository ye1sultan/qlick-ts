import { Heading } from '@react-email/components';

export const Title = ({ text }: { text: string }) => {
	return (
		<Heading className="m-0 mb-[24px] text-24 font-700 leading-28">
			{text}
		</Heading>
	);
};
