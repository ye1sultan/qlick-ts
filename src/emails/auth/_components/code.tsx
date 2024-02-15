import { Heading, Section } from '@react-email/components';

export const Code = ({ code }: { code: number }) => {
	return (
		<Section className="m-0 mb-10 h-[70px] rounded-12 bg-neutral-100 text-center">
			<Heading className="text-32 font-600 leading-[38px] tracking-[12px]">
				{code}
			</Heading>
		</Section>
	);
};
