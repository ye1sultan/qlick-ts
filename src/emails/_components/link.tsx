import { Link as Url } from '@react-email/components';

export const Link = ({ text, url }: { text: string; url: string }) => {
	return (
		<Url className="text-blue-500 underline" href={url}>
			{text}
		</Url>
	);
};
