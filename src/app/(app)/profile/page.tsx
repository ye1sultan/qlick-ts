'use client';

import { Separator } from '@/components/ui/separator';
import { Heading } from '../components/Heading';

export default function Profile() {
	return (
		<>
			<div className="block space-y-6 pb-4">
				<Heading
					heading={'Profile'}
					subHeading={'Your personal and account details.'}
				/>
				<Separator />
			</div>
			<div className="flex w-full flex-col items-start justify-between gap-x-2 gap-y-2 sm:pr-4 md:flex-row md:items-center"></div>
			<div className="w-full"></div>
		</>
	);
}
