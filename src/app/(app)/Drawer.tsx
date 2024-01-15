import { Employees, Exit, GateRecords, Hamburger, Notifications, Overview, Profile, Settings } from "@/components/svgs/Icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTrigger
} from "@/components/ui/sheet";
import Link from "next/link";
import { FC } from "react";

type User = {
    fullName: string;
    email: string;
    avatarUrl: string;
};

type Drawer = {
    user: User;
    activeContent: string;
};

const Drawer: FC<Drawer> = ({ user, activeContent }) => {
    return (
        <div className="flex justify-center items-start py-4 px-4">
            <Sheet>
                <SheetTrigger asChild>
                    <Button
                        variant="ghost"
                        size="icon">
                        <Hamburger className="w-7 h-7 cursor-pointer" />
                    </Button>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <div className="w-full h-20 rounded-md">
                            <div className="w-full h-full flex justify-start items-center">
                                <Avatar className="mx-4 rounded-lg h-9 w-9">
                                    <AvatarImage src={user.avatarUrl} />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <div className="flex flex-col justify-center items-start leading-4 tracking-normal w-full overflow-hidden">
                                    <h3 className="font-semibold text-[14px] flex justify-between items-center w-full">
                                        <span className="truncate">{user.fullName}</span>
                                    </h3>
                                    <p className="font-medium text-[12px] text-zinc-500 dark:text-zinc-400">
                                        <span className="truncate">{user.email}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SheetHeader>
                    <Separator className="mb-3" />
                    <div className="w-full h-full flex flex-col justify-between items-center px-2 text-nowrap font-semibold text-sm">
                        <div className="w-full flex flex-col gap-y-1">
                            <SheetClose asChild>
                                <Link
                                 href="/overview"
                                 className={`flex justify-start items-center w-full h-9 px-3 rounded-md ${activeContent === 'overview' ? 'bg-indigo-200' : 'hover:bg-indigo-200'}`}>
                                    <Overview className="h-[20px] w-[20px] mr-2" />
                                    Overview
                                </Link>
                            </SheetClose>
                            <SheetClose>
                                <Link
                                 href="/employees"
                                 className={`flex justify-start items-center w-full h-9 px-3 rounded-md ${activeContent === 'employees' ? 'bg-indigo-200' : 'hover:bg-indigo-200'}`}>
                                    <Employees className="h-[20px] w-[20px] mr-2" />
                                    Employees
                                </Link>
                            </SheetClose>
                            <SheetClose>
                                <Link
                                 href="/records"
                                 className={`flex justify-start items-center w-full h-9 px-3 rounded-md ${activeContent === 'gateRecords' ? 'bg-indigo-200' : 'hover:bg-indigo-200'}`}>
                                    <GateRecords className="h-[20px] w-[20px] mr-2" />
                                    Gate records
                                </Link>
                            </SheetClose>
                            <Separator className="my-1" />
                            <SheetClose >
                                <Link
                                 href="/profile"
                                 className={`flex justify-start items-center w-full h-9 px-3 rounded-md ${activeContent === 'profile' ? 'bg-indigo-200' : 'hover:bg-indigo-200'}`}>
                                    <Profile className="h-[20px] w-[20px] mr-2" />
                                    Profile
                                </Link>
                            </SheetClose>
                            <SheetClose asChild>
                                <Link
                                 href="/notifications"
                                 className={`flex justify-between items-center w-full h-9 px-3 rounded-md ${activeContent === 'notifications' ? 'bg-indigo-200' : 'hover:bg-indigo-200'}`}>
                                    <div className="flex">
                                        <Notifications className="h-[20px] w-[20px] mr-2" />
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
                                     className={`flex justify-start items-center w-full h-9 px-3 rounded-md ${activeContent === 'settings' ? 'bg-indigo-200' : 'hover:bg-indigo-200'}`}>
                                        <Settings className="h-[20px] w-[20px] mr-2" />
                                        Settings
                                    </Link>
                                </SheetClose>
                                <SheetClose asChild>
                                    <button className="flex justify-start sm:justify-end items-center w-full h-9 px-3 rounded-md text-red-500 hover:bg-indigo-200 ">
                                        <Exit className="h-[20px] w-[20px] mr-2" color="red" />
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
}

export default Drawer;