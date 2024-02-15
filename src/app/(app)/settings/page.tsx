'use client';

import { Separator } from '@/components/ui/separator';
import { Heading } from '../components/Heading';

export default function Settings() {
	return (
		<>
			<div className="block space-y-6 pb-4">
				<Heading
					heading={'Settings'}
					subHeading={'Customize your app experience.'}
				/>
				<Separator />
			</div>
			<div className="md:flex-row md:items-center sm:pr-4 flex w-full flex-col items-start justify-between gap-x-2 gap-y-2"></div>
			<div className="w-full"></div>
		</>
	);
}
