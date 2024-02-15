import { Link } from '@react-email/components';

export const DefaultButton = ({
	children,
	url,
}: {
	children: React.ReactNode;
	url: string;
}) => (
	<Link
		href={url}
		className="m-0 mx-2 cursor-pointer rounded-12 bg-neutral-900 px-4 py-3.5 text-center text-16 font-400 leading-20 text-white"
	>
		{children}
	</Link>
);
