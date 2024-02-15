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
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip';
import Link from 'next/link';
import { FC } from 'react';

const SidebarCol: FC = () => (
	<div className="flex h-full w-full flex-col items-center justify-between">
		<div className="flex w-full flex-col items-center justify-center gap-y-1">
			<TooltipProvider delayDuration={0}>
				<Tooltip>
					<TooltipTrigger asChild>
						<Link
							href="/overview"
							className="rounded-md flex h-9 w-9 items-center justify-center hover:bg-indigo-200"
						>
							<Overview className="h-[20px] w-[20px]" />
						</Link>
					</TooltipTrigger>
					<TooltipContent side="right" className="flex items-center">
						<p className="font-medium">Overview</p>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>

			<TooltipProvider delayDuration={0}>
				<Tooltip>
					<TooltipTrigger asChild>
						<Link
							href="/employees"
							className="rounded-md flex h-9 w-9 items-center justify-center hover:bg-indigo-200"
						>
							<Employees className="h-[20px] w-[20px]" />
						</Link>
					</TooltipTrigger>
					<TooltipContent side="right" className="flex items-center">
						<p className="font-medium">Employees</p>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>

			<TooltipProvider delayDuration={0}>
				<Tooltip>
					<TooltipTrigger asChild>
						<Link
							href="/records"
							className="rounded-md flex h-9 w-9 items-center justify-center hover:bg-indigo-200"
						>
							<GateRecords className="h-[20px] w-[20px]" />
						</Link>
					</TooltipTrigger>
					<TooltipContent side="right" className="flex items-center">
						<p className="font-medium">Gate records</p>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>

			<Separator className="my-1" />

			<TooltipProvider delayDuration={0}>
				<Tooltip>
					<TooltipTrigger asChild>
						<Link
							href="/profile"
							className="rounded-md flex h-9 w-9 items-center justify-center hover:bg-indigo-200"
						>
							<Profile className="h-[20px] w-[20px]" />
						</Link>
					</TooltipTrigger>
					<TooltipContent side="right" className="flex items-center">
						<p className="font-medium">Profile</p>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
			<TooltipProvider delayDuration={0}>
				<Tooltip>
					<TooltipTrigger asChild>
						<Link
							href="/notifications"
							className="rounded-md flex h-9 w-9 items-center justify-center hover:bg-indigo-200"
						>
							<Notifications className="h-[20px] w-[20px]" />
						</Link>
					</TooltipTrigger>
					<TooltipContent side="right" className="flex items-center">
						<p className="font-medium">Notifications</p>
						<p className="font-medium ml-4 text-[#717175]">4</p>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
		</div>

		<div className="flex w-full flex-col items-center justify-center gap-y-1">
			<Separator className="mb-1" />

			<TooltipProvider delayDuration={0}>
				<Tooltip>
					<TooltipTrigger asChild>
						<Link
							href="/settings"
							className="rounded-md flex h-9 w-9 items-center justify-center hover:bg-indigo-200"
						>
							<Settings className="h-[20px] w-[20px]" />
						</Link>
					</TooltipTrigger>
					<TooltipContent side="right" className="flex items-center">
						<p className="font-medium">Settings</p>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>

			<TooltipProvider delayDuration={0}>
				<Tooltip>
					<TooltipTrigger asChild>
						<button className="rounded-md flex h-9 w-9 items-center justify-center text-red-500 hover:bg-indigo-200">
							<Exit className="h-[20px] w-[20px]" color="red" />
						</button>
					</TooltipTrigger>
					<TooltipContent side="right" className="flex items-center">
						<p className="font-medium">Exit</p>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
		</div>
	</div>
);

export default SidebarCol;
