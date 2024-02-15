import { FC } from 'react';

type Heading = {
	heading: string;
	subHeading: string;
};

export const Heading: FC<Heading> = ({ heading, subHeading }) => (
	<div className="space-y-0.5">
		<h2 className="text-3xl font-bold tracking-tight">{heading}</h2>
		<p className="text-muted-foreground text-neutral-500">{subHeading}</p>
	</div>
);
