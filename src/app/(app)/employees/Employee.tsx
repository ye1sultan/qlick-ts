import { Edit } from "@/components/svgs/Icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FC, useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "@radix-ui/react-icons";

interface Employee {
    employee: {
        id: number;
        name: string;
        label: string;
        email: string;
        phone: string;
        role: string;
        joinDate: string;
        department: string;
        departmentValue: string;
        avatarUrl: string;
        value: string;
    }
}

const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    return new Date(dateString).toLocaleDateString('en-GB', options);
}

const EmployeeRow: FC<Employee> = ({ employee }) => {
    const [date, setDate] = useState<Date | null>(new Date(employee.joinDate) || null);
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div data-testid="employee-row" className="w-full flex justify-between items-center py-4 relative px-8">
            <div className="w-1/4 xl:w-1/5 text-start flex justify-start items-center gap-x-2 font-medium">
                <Avatar className="h-9 w-9">
                    <AvatarImage src={employee.avatarUrl} />
                    <AvatarFallback>{`${employee.name.split(' ')[0].charAt(0)} ${employee.name.split(' ')[1].charAt(0)}`}</AvatarFallback>
                </Avatar>
                <span className="truncate">{employee.name}</span>
            </div>
            <div className="w-1/4 text-start text-[15px] truncate">{employee.email}</div>
            <div className="hidden lg:block w-1/5 xl:w-1/6 text-start text-[15px] truncate">{employee.phone}</div>
            <div className="w-1/5 xl:w-1/6 text-start text-[15px] truncate">{employee.role}</div>
            <div className="hidden xl:block w-1/6 text-start text-[15px] truncate">{formatDate(employee.joinDate)}</div>
            <div className="w-1/5 xl:w-1/6 text-start text-[15px] truncate">{employee.department}</div>
            <div className="absolute top-[50%] right-4 translate-y-[-50%] cursor-pointer">
                <Dialog>
                    <DialogTrigger asChild>
                        <Edit className="w-5 h-5 stroke-zinc-500 hover:stroke-zinc-600" />
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Edit profile</DialogTitle>
                            <DialogDescription>
                                Make changes to your profile here. Click save when you're done.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                    Name
                                </Label>
                                <Input
                                    id="name"
                                    defaultValue={employee.name}
                                    className="col-span-3"
                                    type="text"
                                />
                            </div>

                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="email" className="text-right">
                                    Email
                                </Label>
                                <Input
                                    id="email"
                                    defaultValue={employee.email}
                                    className="col-span-3"
                                    type="email"
                                />
                            </div>

                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="phone" className="text-right">
                                    Phone
                                </Label>
                                <Input
                                    id="phone"
                                    defaultValue={employee.phone}
                                    className="col-span-3"
                                    type="tel"
                                />
                            </div>

                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="role" className="text-right">
                                    Role
                                </Label>
                                <Input
                                    id="role"
                                    defaultValue={employee.role}
                                    className="col-span-3"
                                    type="tex"
                                />
                            </div>

                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="department" className="text-right">
                                    Department
                                </Label>
                                <Input
                                    id="department"
                                    defaultValue={employee.department}
                                    className="col-span-3"
                                    type="tex"
                                />
                            </div>


                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="joinDate" className="text-right">
                                    Join Date
                                </Label>

                                <Popover open={open}>
                                    <PopoverTrigger asChild>
                                        <Button onClick={() => setOpen(true)} variant="outline" className="w-[240px] pl-3 text-left font-normal">
                                            {date ? formatDate(date.toISOString()) : <span>Select a date</span>}
                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="center">
                                        <Calendar
                                            mode="single"
                                            selected={date || undefined}
                                            onSelect={(newDate) => { setDate(newDate || null); setOpen(false) }}
                                            disabled={(date) =>
                                                date > new Date() || date < new Date("1900-01-01")
                                            }
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>
                        </div>
                        <DialogFooter>
                            <Button type="submit">Save changes</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    );
};

export default EmployeeRow;