import { FormLabel } from '@/components/ui/form';

interface LabelProps {
	text: string;
	fill?: string;
}
export const Label = ({ text, fill }: LabelProps) => {
	return (
		<FormLabel
			className={`absolute left-4 top-[50%] translate-y-[-50%] bg-white text-zinc-500 transition-all duration-300 ease-in-out group-focus-within:left-2 group-focus-within:top-0 group-focus-within:px-2 ${fill ? 'left-2 top-0 px-2' : ''}`}
		>
			{text}
		</FormLabel>
	);
};
