'use client';

import { Search } from '@/components/svgs/Icons';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from '@/components/ui/resizable';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { useEffect, useState } from 'react';
import Drawer from './Drawer';
import SidebarCol from './SideBarCol';
import SidebarExp from './SideBarExp';
import UserPaneCol from './UserPaneCol';
import UserPaneExp from './UserPaneExp';

const user: {
	fullName: string;
	email: string;
	avatarUrl: string;
} = {
	fullName: 'Yelsultan Niyaztay',
	email: 'niyaztaye@gmail.com',
	avatarUrl: 'https://picsum.photos/1920/1080',
};

export default function AppLayout({ children }: { children: React.ReactNode }) {
	const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
	const [leftSide, setLeftSide] = useState<boolean>(false);

	useEffect(() => {
		const handleResize = (): void => {
			const lgBreakpoint: number = 1024;
			setLeftSide(window.innerWidth < lgBreakpoint);
		};

		window.addEventListener('resize', handleResize);

		handleResize();

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<div className="flex max-h-screen w-full flex-col overflow-hidden">
			<ResizablePanelGroup
				direction="horizontal"
				className="rounded-lg min-h-[200px] w-full border"
			>
				<ResizablePanel
					className={`${leftSide ? 'hidden' : 'flex'} h-full min-h-screen`}
					defaultSize={17}
					minSize={15}
					maxSize={20}
					collapsible={true}
					collapsedSize={3.5}
					onCollapse={() => setIsCollapsed(true)}
					onExpand={() => setIsCollapsed(false)}
				>
					<div className="font-semibold text-sm flex w-full flex-col items-center justify-start pb-2 pt-4">
						{!isCollapsed ? (
							<>
								<UserPaneExp user={user} />
								<Separator className="my-3" />
								<SidebarExp />
							</>
						) : (
							<>
								<UserPaneCol user={user} />
								<Separator className="my-3" />
								<SidebarCol />
							</>
						)}
					</div>
				</ResizablePanel>
				<ResizableHandle />
				<ResizablePanel className="h-screen overflow-hidden" defaultSize={83}>
					<ScrollArea className="h-full w-full">
						<div className="lg:hidden rounded-es-xl rounded-ee-xl mb-4 flex w-full items-center justify-between py-2 shadow-lg shadow-indigo-200">
							<div className="ml-4 flex w-full items-center justify-center ">
								<Avatar className="mr-2 h-9 w-9">
									<AvatarImage src={user.avatarUrl} />
									<AvatarFallback>CN</AvatarFallback>
								</Avatar>
								<h3 className="font-semibold text-lg flex w-full items-center justify-between">
									{user.fullName}
								</h3>
							</div>
							<div className="flex items-center justify-center">
								<Search className="h-6 w-6 cursor-pointer" />
								<Drawer user={user} />
							</div>
						</div>
						<div className="md:px-10 mb-6 h-full w-full px-4 pt-10">
							{children}
						</div>
					</ScrollArea>
				</ResizablePanel>
			</ResizablePanelGroup>
		</div>
	);
}
