import {
    Employees,
    Exit,
    GateRecords,
    Notifications,
    Overview,
    Profile,
    Settings
} from "@/components/svgs/Icons";
import {Separator} from "@/components/ui/separator";
import Link from "next/link";
import { FC } from "react";

type SideBar = {
    activeContent: string;
};

const SidebarExp: FC<SideBar> = ({activeContent}) => (
    <div
        className="w-full h-full flex flex-col justify-between items-center px-2 text-nowrap">
        <div className="w-full flex flex-col gap-y-1">
            <Link
                href="/overview"
                className={`flex justify-start items-center w-full h-9 px-3 rounded-md ${activeContent === 'overview'
                ? 'bg-indigo-200'
                : 'hover:bg-indigo-200'}`}>
                <Overview className="h-[20px] w-[20px] mr-2"/>
                Overview
            </Link>
            <Link
                href="/employees"
                className={`flex justify-start items-center w-full h-9 px-3 rounded-md ${activeContent === 'employees'
                ? 'bg-indigo-200'
                : 'hover:bg-indigo-200'}`}>
                <Employees className="h-[20px] w-[20px] mr-2"/>
                Employees
            </Link>
            <Link
                href="/records"
                className={`flex justify-start items-center w-full h-9 px-3 rounded-md ${activeContent === 'gateRecords'
                ? 'bg-indigo-200'
                : 'hover:bg-indigo-200'}`}>
                <GateRecords className="h-[20px] w-[20px] mr-2"/>
                Gate records
            </Link>
            <Separator className="my-1"/>
            <Link
                href="/profile"
                className={`flex justify-start items-center w-full h-9 px-3 rounded-md ${activeContent === 'profile'
                ? 'bg-indigo-200'
                : 'hover:bg-indigo-200'}`}>
                <Profile className="h-[20px] w-[20px] mr-2"/>
                Profile
            </Link>
            <Link
                href="/notifications"
                className={`flex justify-between items-center w-full h-9 px-3 rounded-md ${activeContent === 'notifications'
                ? 'bg-indigo-200'
                : 'hover:bg-indigo-200'}`}>
                <div className="flex">
                    <Notifications className="h-[20px] w-[20px] mr-2"/>
                    Notifications
                </div>
                <p className="text-sm pr-1">4</p>
            </Link>
        </div>

        <div className="w-full flex flex-col gap-y-1">
            <Separator className="my-1"/>

            <Link
                href="/settings"
                className={`flex justify-start items-center w-full h-9 px-3 rounded-md ${activeContent === 'settings'
                ? 'bg-indigo-200'
                : 'hover:bg-indigo-200'}`}>
                <Settings className="h-[20px] w-[20px] mr-2"/>
                Settings
            </Link>
            <button
                className="flex justify-start items-center w-full h-9 px-3 rounded-md text-red-500 hover:bg-indigo-200">
                <Exit className="h-[20px] w-[20px] mr-2"/>
                Exit
            </button>
        </div>
    </div>
);

export default SidebarExp;