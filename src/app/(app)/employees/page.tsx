"use client";

import { Check, Dots, Plus, Refresh, Search, Suitcase, UserAvatar, UserNotFound } from "@/components/svgs/Icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Heading } from "../components/Heading";

interface Employee {
    id: number;
    name: string;
    label: string;
    email: string;
    phone: string;
    role: string;
    joinDate: string;
    department: string;
    avatarUrl: string;
    value: string;
}

interface Department {
    value: string;
    label: string;
}

interface Role {
    value: string;
    label: string;
}

const departments: Department[] = [
    {
        value: "marketing",
        label: "Marketing",
    },
    {
        value: "engineering",
        label: "Engineering",
    },
    {
        value: "design",
        label: "Design",
    },
    {
        value: "sales",
        label: "Sales",
    },
    {
        value: "human_resources",
        label: "Human Resources",
    },
    {
        value: "product",
        label: "Product",
    },
    {
        value: "quality_assurance",
        label: "Quality Assurance",
    },
    {
        value: "it",
        label: "IT",
    },
    {
        value: "finance",
        label: "Finance",
    },
    {
        value: "customer_service",
        label: "Customer Service",
    }
];

const employees: Employee[] = [
    {
        id: 1,
        name: "John Doe",
        label: "John Doe",
        email: "john.doe@example.com",
        phone: "123-456-7890",
        role: "Manager",
        joinDate: "2020-01-15",
        department: "Marketing",
        avatarUrl: "https://picsum.photos/1920/1080",
        value: "john_doe",
    },
    {
        id: 2,
        name: "Jane Smith",
        label: "Jane Smith",
        email: "jane.smith@example.com",
        phone: "234-567-8901",
        role: "Developer",
        joinDate: "2019-06-10",
        department: "Engineering",
        avatarUrl: "https://picsum.photos/1920/1080",
        value: "jane_smith",
    },
    {
        id: 3,
        name: "Emily Johnson",
        label: "Emily Johnson",
        email: "emily.johnson@example.com",
        phone: "345-678-9012",
        role: "Designer",
        joinDate: "2021-03-20",
        department: "Design",
        avatarUrl: "https://picsum.photos/1920/1080",
        value: "emily_johnson",
    },
    {
        id: 4,
        name: "Michael Brown",
        label: "Michael Brown",
        email: "michael.brown@example.com",
        phone: "456-789-0123",
        role: "Sales Executive",
        joinDate: "2018-09-05",
        department: "Sales",
        avatarUrl: "https://picsum.photos/1920/1080",
        value: "michael_brown",
    },
    {
        id: 5,
        name: "Sarah Wilson",
        label: "Sarah Wilson",
        email: "sarah.wilson@example.com",
        phone: "567-890-1234",
        role: "HR Manager",
        joinDate: "2019-11-22",
        department: "Human Resources",
        avatarUrl: "https://picsum.photos/1920/1080",
        value: "sarah_wilson",
    },
    {
        id: 6,
        name: "David Lee",
        label: "David Lee",
        email: "david.lee@example.com",
        phone: "678-901-2345",
        role: "Product Manager",
        joinDate: "2020-02-19",
        department: "Product",
        avatarUrl: "https://picsum.photos/1920/1080",
        value: "david_lee",
    },
    {
        id: 7,
        name: "Linda Garcia",
        label: "Linda Garcia",
        email: "linda.garcia@example.com",
        phone: "789-012-3456",
        role: "Quality Analyst",
        joinDate: "2021-07-30",
        department: "Quality Assurance",
        avatarUrl: "https://picsum.photos/1920/1080",
        value: "linda_garcia",
    },
    {
        id: 8,
        name: "Kevin Martinez",
        label: "Kevin Martinez",
        email: "kevin.martinez@example.com",
        phone: "890-123-4567",
        role: "Network Administrator",
        joinDate: "2018-12-14",
        department: "IT",
        avatarUrl: "https://picsum.photos/1920/1080",
        value: "kevin_martinez",
    },
    {
        id: 9,
        name: "Elizabeth Gonzalez",
        label: "Elizabeth Gonzalez",
        email: "elizabeth.gonzalez@example.com",
        phone: "901-234-5678",
        role: "Accountant",
        joinDate: "2020-05-05",
        department: "Finance",
        avatarUrl: "https://picsum.photos/1920/1080",
        value: "elizabeth_gonzalez",
    },
    {
        id: 10,
        name: "Daniel Harris",
        label: "Daniel Harris",
        email: "daniel.harris@example.com",
        phone: "012-345-6789",
        role: "Support Specialist",
        joinDate: "2021-09-20",
        department: "Customer Service",
        avatarUrl: "https://picsum.photos/1920/1080",
        value: "daniel_harris",
    }
];

const roles: Role[] = [
    { value: "manager", label: "Manager" },
    { value: "developer", label: "Developer" },
    { value: "designer", label: "Designer" },
    { value: "sales_executive", label: "Sales Executive" },
    { value: "hr_manager", label: "HR Manager" },
    { value: "product_manager", label: "Product Manager" },
    { value: "quality_analyst", label: "Quality Analyst" },
    { value: "network_administrator", label: "Network Administrator" },
    { value: "accountant", label: "Accountant" },
    { value: "support_specialist", label: "Support Specialist" }
];

const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    return new Date(dateString).toLocaleDateString('en-GB', options);
}

export default function Employees() {
    const [open, setOpen] = useState<boolean>(false);
    const [value, setValue] = useState<string>("");
    const [searchQuery, setSearchQuery] = useState<string>("");

    const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);

    const handleSelectEmployee = (employeeValue: string) => {
        const employee = employees.find(e => e.value === employeeValue);
        setSelectedEmployee(employee || null);
    };

    const filteredEmployees = employees.filter((employee) =>
        employee.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const filteredItems = [...departments, ...roles].filter(item =>
        item.label.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSearchChange = (newValue: string): void => {
        setSearchQuery(newValue || '');
    };

    const getTypeOfSelectedItem = (value: string): string | null => {
        if (employees.some(employee => employee.value === value)) {
            return 'employee';
        } else if (departments.some(department => department.value === value)) {
            return 'department';
        } else if (roles.some(role => role.value === value)) {
            return 'role';
        }
        return null;
    };

    const selectedItemType = getTypeOfSelectedItem(value);

    return (
        <>
            <div className="space-y-6 pb-4 block">
                <Heading heading={"Employees"} subHeading={"Management and analysis of employee information."} />
                <Separator />
            </div>
            <div className="w-full flex flex-row justify-start items-center gap-y-2 sm:pr-4">
                <div className="flex flex-row justify-start items-center gap-x-2">
                    <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                            <Button
                                variant="outline"
                                role="combobox"
                                aria-expanded={open}
                                className="w-[300px] flex justify-start items-center gap-x-2"
                            >
                                {value
                                    ? (
                                        <>
                                            {selectedItemType === 'employee' ? (
                                                <UserAvatar className="stroke-zinc-500 h-5 w-5" />
                                            ) : (
                                                <Suitcase className="stroke-zinc-500 h-5 w-5" />
                                            )}
                                            {[...departments, ...employees, ...roles].find((item) => item.value === value)?.label}
                                        </>
                                    )
                                    : (
                                        <>
                                            <Search className="stroke-zinc-500 h-4 w-4" />
                                            <span className="text-zinc-500">Search...</span>
                                        </>
                                    )}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[300px] p-0">
                            <Command
                                className="rounded-lg border shadow-md"
                            >
                                <CommandInput
                                    placeholder="Type a command or search..."
                                    value={searchQuery}
                                    onValueChange={handleSearchChange}
                                />
                                <CommandList>
                                    <CommandEmpty>
                                        <div className="flex justify-center items-center gap-x-2">
                                            <UserNotFound className="stroke-zinc-600 h-5 w-5" />
                                            No results found.
                                        </div>
                                    </CommandEmpty>
                                    {filteredEmployees.length > 0 && (
                                        <CommandGroup heading="Employees">
                                            {filteredEmployees.slice(0, 3).map((employee) => (
                                                <CommandItem
                                                    key={employee.id}
                                                    value={employee.value}
                                                    className="cursor-pointer"
                                                    onSelect={(currentValue) => {
                                                        setValue(currentValue === value ? "" : currentValue)
                                                        setOpen(false)
                                                    }}
                                                >
                                                    {employee.name}
                                                    <Check
                                                        className={cn(
                                                            "ml-auto h-4 w-4",
                                                            value === employee.value ? "opacity-100" : "opacity-0"
                                                        )}
                                                    />
                                                </CommandItem>
                                            ))}
                                        </CommandGroup>
                                    )}

                                    {filteredItems.length > 0 && (
                                        <CommandSeparator />
                                    )}

                                    {filteredItems.length > 0 && (
                                        <CommandGroup heading="Departments & Roles">
                                            {filteredItems.slice(0, 3).map((items) => (
                                                <CommandItem
                                                    key={items.value}
                                                    value={items.value}
                                                    className="cursor-pointer"
                                                    onSelect={(currentValue) => {
                                                        setValue(currentValue === value ? "" : currentValue)
                                                        setOpen(false)
                                                    }}
                                                >
                                                    {items.label}
                                                    <Check
                                                        className={cn(
                                                            "ml-auto h-4 w-4",
                                                            value === items.value ? "opacity-100" : "opacity-0"
                                                        )}
                                                    />
                                                </CommandItem>
                                            ))}
                                        </CommandGroup>
                                    )}
                                </CommandList>
                            </Command>
                        </PopoverContent>
                    </Popover>
                    <Button size="icon" className="bg-indigo-400 hover:bg-indigo-500">
                        <Plus className="stroke-zinc-50" />
                    </Button>
                    <Button size="icon" variant="outline" className="hover:bg-gray-200">
                        <Refresh className="stroke-zinc-800 w-4 h-4" />
                    </Button>
                </div>
            </div>
            <div className="w-full h-full py-6">
                <h1 className="text-xl font-medium">All <span className="text-indigo-600">{employees.length}</span> Employees</h1>
                <div className="border-[1px] border-indigo-200 rounded-md my-4">
                    <div className="w-full flex justify-between items-center px-8 py-2 text-sm capitalize text-zinc-500">
                        <div className="w-1/6 text-start">name</div>
                        <div className="w-1/5 text-start">email</div>
                        <div className="w-1/6 text-start">phone</div>
                        <div className="w-1/6 text-start">role</div>
                        <div className="w-1/6 text-start">join date</div>
                        <div className="w-1/6 text-start">department</div>
                    </div>
                    <Separator className="bg-indigo-200" />
                    {employees.map((employee, index) => (
                        <div key={employee.id} className="w-full">
                            <div className="w-full flex justify-between items-center gap-x-2 py-4 relative px-8">
                                <div className="w-1/6 text-start flex justify-start items-center gap-x-2 font-medium">
                                    <Avatar className="h-9 w-9">
                                        <AvatarImage src={employee.avatarUrl} />
                                        <AvatarFallback>{`${employee.name.split(' ')[0].charAt(0)} ${employee.name.split(' ')[1].charAt(0)}`}</AvatarFallback>
                                    </Avatar>
                                    {employee.name}
                                </div>
                                <div className="w-1/5 text-start text-[15px] truncate">{employee.email}</div>
                                <div className="w-1/6 text-start text-[15px] truncate">{employee.phone}</div>
                                <div className="w-1/6 text-start text-[15px] truncate">{employee.role}</div>
                                <div className="w-1/6 text-start text-[15px] truncate">{formatDate(employee.joinDate)}</div>
                                <div className="w-1/6 text-start text-[15px] truncate">{employee.department}</div>
                                <div className="absolute top-[50%] right-4 translate-y-[-50%]">
                                    <Dots className="rotate-90 stroke-zinc-600 hover:stroke-zinc-700 cursor-pointer h-5 w-5" />
                                </div>
                            </div>
                            <Separator className={index < employees.length - 1 ? 'bg-indigo-200' : 'hidden'} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}