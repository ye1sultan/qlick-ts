import {
	Employees,
	Exit,
	GateRecords,
	Hamburger,
	Notifications,
	Overview,
	Profile,
	Settings,
} from '@/components/svgs/Icons';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTrigger,
} from '@/components/ui/sheet';
import Link from 'next/link';
import { FC } from 'react';

type User = {
	user: {
		fullName: string;
		email: string;
		avatarUrl: string;
	};
};

const Drawer: FC<User> = ({ user }) => {
	return (
		<div className="flex items-start justify-center px-4 py-4">
			<Sheet>
				<SheetTrigger asChild>
					<Button variant="ghost" size="icon">
						<Hamburger className="h-7 w-7 cursor-pointer" />
					</Button>
				</SheetTrigger>
				<SheetContent>
					<SheetHeader>
						<div className="rounded-md h-20 w-full">
							<div className="flex h-full w-full items-center justify-start">
								<Avatar className="rounded-lg mx-4 h-9 w-9">
									<AvatarImage src={user.avatarUrl} />
									<AvatarFallback>CN</AvatarFallback>
								</Avatar>
								<div className="leading-4 flex w-full flex-col items-start justify-center overflow-hidden tracking-normal">
									<h3 className="font-semibold flex w-full items-center justify-between text-[14px]">
										<span className="truncate">{user.fullName}</span>
									</h3>
									<p className="font-medium text-zinc-500 dark:text-zinc-400 text-[12px]">
										<span className="truncate">{user.email}</span>
									</p>
								</div>
							</div>
						</div>
					</SheetHeader>
					<Separator className="mb-3" />
					<div className="font-semibold text-sm flex h-full w-full flex-col items-center justify-between text-nowrap px-2">
						<div className="flex w-full flex-col gap-y-1">
							<SheetClose asChild>
								<Link
									href="/overview"
									className="rounded-md flex h-9 w-full items-center justify-start px-3 hover:bg-indigo-200"
								>
									<Overview className="mr-2 h-[20px] w-[20px]" />
									Overview
								</Link>
							</SheetClose>
							<SheetClose>
								<Link
									href="/employees"
									className="rounded-md flex h-9 w-full items-center justify-start px-3 hover:bg-indigo-200"
								>
									<Employees className="mr-2 h-[20px] w-[20px]" />
									Employees
								</Link>
							</SheetClose>
							<SheetClose>
								<Link
									href="/records"
									className="rounded-md flex h-9 w-full items-center justify-start px-3 hover:bg-indigo-200"
								>
									<GateRecords className="mr-2 h-[20px] w-[20px]" />
									Gate records
								</Link>
							</SheetClose>
							<Separator className="my-1" />
							<SheetClose>
								<Link
									href="/profile"
									className="rounded-md flex h-9 w-full items-center justify-start px-3 hover:bg-indigo-200"
								>
									<Profile className="mr-2 h-[20px] w-[20px]" />
									Profile
								</Link>
							</SheetClose>
							<SheetClose asChild>
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
							</SheetClose>
							<Separator className="my-1" />
							<SheetFooter className="flex flex-col gap-y-1">
								<SheetClose asChild>
									<Link
										href="/settings"
										className="rounded-md flex h-9 w-full items-center justify-start px-3 hover:bg-indigo-200"
									>
										<Settings className="mr-2 h-[20px] w-[20px]" />
										Settings
									</Link>
								</SheetClose>
								<SheetClose asChild>
									<button className="sm:justify-end rounded-md flex h-9 w-full items-center justify-start px-3 text-red-500 hover:bg-indigo-200 ">
										<Exit className="mr-2 h-[20px] w-[20px]" color="red" />
										Exit
									</button>
								</SheetClose>
							</SheetFooter>
						</div>
					</div>
				</SheetContent>
			</Sheet>
		</div>
	);
};

export default Drawer;
