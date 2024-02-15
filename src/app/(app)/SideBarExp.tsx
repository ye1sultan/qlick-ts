import {
	Employees,
	Exit,
	GateRecords,
	Notifications,
	Overview,
	Profile,
	Settings,
} from '@/components/svgs/Icons';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { FC } from 'react';

const SidebarExp: FC = () => (
	<div className="flex h-full w-full flex-col items-center justify-between text-nowrap px-2">
		<div className="flex w-full flex-col gap-y-1">
			<Link
				href="/overview"
				className="rounded-md flex h-9 w-full items-center justify-start px-3 hover:bg-indigo-200"
			>
				<Overview className="mr-2 h-[20px] w-[20px]" />
				Overview
			</Link>
			<Link
				href="/employees"
				className="rounded-md flex h-9 w-full items-center justify-start px-3 hover:bg-indigo-200"
			>
				<Employees className="mr-2 h-[20px] w-[20px]" />
				Employees
			</Link>
			<Link
				href="/records"
				className="rounded-md flex h-9 w-full items-center justify-start px-3 hover:bg-indigo-200"
			>
				<GateRecords className="mr-2 h-[20px] w-[20px]" />
				Gate records
			</Link>
			<Separator className="my-1" />
			<Link
				href="/profile"
				className="rounded-md flex h-9 w-full items-center justify-start px-3 hover:bg-indigo-200"
			>
				<Profile className="mr-2 h-[20px] w-[20px]" />
				Profile
			</Link>
			<Link
				href="/notifications"
				className="rounded-md flex h-9 w-full items-center justify-between px-3 hover:bg-indigo-200"
			>
				<div className="flex">
					<Notifications className="mr-2 h-[20px] w-[20px]" />
					Notifications
				</div>
				<p className="text-sm pr-1">4</p>
			</Link>
		</div>

		<div className="flex w-full flex-col gap-y-1">
			<Separator className="my-1" />

			<Link
				href="/settings"
				className="rounded-md flex h-9 w-full items-center justify-start px-3 hover:bg-indigo-200"
			>
				<Settings className="mr-2 h-[20px] w-[20px]" />
				Settings
			</Link>
			<button className="rounded-md flex h-9 w-full items-center justify-start px-3 text-red-500 hover:bg-indigo-200">
				<Exit className="mr-2 h-[20px] w-[20px]" />
				Exit
			</button>
		</div>
	</div>
);

export default SidebarExp;
