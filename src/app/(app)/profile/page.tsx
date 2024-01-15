"use client";

import { Separator } from "@/components/ui/separator";
import { Heading } from "../components/Heading";

export default function Profile() {
    return (
        <>
            <div className="space-y-6 pb-4 block">
                <Heading heading={"Profile"} subHeading={"Your personal and account details."} />
                <Separator />
            </div>
            <div className="w-full flex flex-col md:flex-row items-start justify-between md:items-center gap-y-2 gap-x-2 sm:pr-4">

            </div>
            <div className="w-full">

            </div>
        </>
    );
}