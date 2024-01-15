"use client";

import { Separator } from "@/components/ui/separator";
import { Heading } from "../components/Heading";

export default function Records() {
    return (
        <>
            <div className="space-y-6 pb-4 block">
                <Heading heading={"Gate records"} subHeading={"Detailed log of all gate entries and exits."} />
                <Separator />
            </div>
            <div className="w-full flex flex-col md:flex-row items-start justify-between md:items-center gap-y-2 gap-x-2 sm:pr-4">

            </div>
            <div className="w-full">

            </div>
        </>
    );
}