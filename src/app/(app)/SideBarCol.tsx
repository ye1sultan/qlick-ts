import { Employees, GateRecords, Exit, Notifications, Overview, Profile, Settings } from "@/components/svgs/Icons";
import { Separator } from "@/components/ui/separator";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { FC } from "react";

type SideBar = {
    activeContent: string;
};

const SidebarCol: FC<SideBar> = ({ activeContent }) => (
    <div className="w-full h-full flex flex-col justify-between items-center">
        <div className="w-full flex flex-col justify-center items-center gap-y-1">
            <TooltipProvider delayDuration={0}>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link
                            href="/overview"
                            className={`flex justify-center items-center w-9 h-9 rounded-md ${activeContent === 'overview' ? 'bg-indigo-200' : 'hover:bg-indigo-200'}`}>
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
                            className={`flex justify-center items-center w-9 h-9 rounded-md ${activeContent === 'employees' ? 'bg-indigo-200' : 'hover:bg-indigo-200'}`}>
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
                            className={`flex justify-center items-center w-9 h-9 rounded-md ${activeContent === 'gateRecords' ? 'bg-indigo-200' : 'hover:bg-indigo-200'}`}>
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
                            className={`flex justify-center items-center w-9 h-9 rounded-md ${activeContent === 'profile' ? 'bg-indigo-200' : 'hover:bg-indigo-200'}`}>
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
                            className={`flex justify-center items-center w-9 h-9 rounded-md ${activeContent === 'notifications' ? 'bg-indigo-200' : 'hover:bg-indigo-200'}`}>
                            <Notifications className="h-[20px] w-[20px]" />
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right" className="flex items-center">
                        <p className="font-medium">Notifications</p>
                        <p className="text-[#717175] ml-4 font-medium">4</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>

        <div className="w-full flex flex-col justify-center items-center gap-y-1">
            <Separator className="mb-1" />

            <TooltipProvider delayDuration={0}>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link
                            href="/settings"
                            className={`flex justify-center items-center w-9 h-9 rounded-md ${activeContent === 'settings' ? 'bg-indigo-200' : 'hover:bg-indigo-200'}`}>
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
                        <button className={`flex justify-center items-center w-9 h-9 rounded-md text-red-500 hover:bg-indigo-200`}>
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