"use client";

import { Search } from "@/components/svgs/Icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";
import Drawer from "./Drawer";
import SidebarCol from "./SideBarCol";
import SidebarExp from "./SideBarExp";
import UserPaneCol from "./UserPaneCol";
import UserPaneExp from "./UserPaneExp";

const user: {
    fullName: string;
    email: string;
    avatarUrl: string;
} = {
    fullName: "Yelsultan Niyaztay",
    email: "niyaztaye@gmail.com",
    avatarUrl: "https://picsum.photos/1920/1080"
};

export default function AppLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
    const [leftSide, setLeftSide] = useState<boolean>(false);
    const [activeContent, setActiveContent] = useState<string>('overview');

    useEffect(() => {
        const handleResize = (): void => {
            const lgBreakpoint: number = 1024;
            setLeftSide(window.innerWidth < lgBreakpoint);
        };

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="w-full flex flex-col overflow-hidden max-h-screen" >
            <ResizablePanelGroup
                direction="horizontal"
                className="min-h-[200px] w-full rounded-lg border"
            >
                <ResizablePanel
                    className={`${leftSide ? "hidden" : "flex"} min-h-screen h-full`}
                    defaultSize={17}
                    minSize={15}
                    maxSize={20}
                    collapsible={true}
                    collapsedSize={3.5}
                    onCollapse={() => setIsCollapsed(true)}
                    onExpand={() => setIsCollapsed(false)}
                >
                    <div className="flex flex-col w-full items-center justify-start pb-2 pt-4 font-semibold text-sm">
                        {!isCollapsed ? (
                            <>
                                <UserPaneExp user={user} />
                                <Separator className="my-3" />
                                <SidebarExp activeContent={activeContent} />
                            </>
                        ) : (
                            <>
                                <UserPaneCol user={user} />
                                <Separator className="my-3" />
                                <SidebarCol activeContent={activeContent} />
                            </>
                        )}
                    </div>
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel
                    className="overflow-hidden h-screen"
                    defaultSize={83}
                >
                    <ScrollArea className="w-full h-full">
                        <div className="w-full flex lg:hidden justify-between items-center py-2 mb-4 shadow-lg shadow-indigo-200 rounded-es-xl rounded-ee-xl">
                            <div className="w-full ml-4 flex justify-center items-center ">
                                <Avatar className="h-9 w-9 mr-2">
                                    <AvatarImage src={user.avatarUrl} />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <h3 className="font-semibold text-lg flex justify-between items-center w-full">
                                    {user.fullName}
                                </h3>
                            </div>
                            <div className="flex justify-center items-center">
                                <Search className="w-6 h-6 cursor-pointer" />
                                <Drawer user={user} activeContent={activeContent} />
                            </div>
                        </div>
                        <div className="w-full h-full px-4 md:px-10 pt-10 mb-6">
                            {children}
                        </div>
                    </ScrollArea>
                </ResizablePanel>
            </ResizablePanelGroup>
        </div >
    )
}