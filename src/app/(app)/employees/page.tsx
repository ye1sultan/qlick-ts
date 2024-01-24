"use client";

import { Check, Plus, Refresh, Search, UserNotFound } from "@/components/svgs/Icons";
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
import { useState } from "react";
import { Heading } from "../components/Heading";
import EmployeeRow from "./Employee";
import { Badge } from "@/components/ui/badge"

interface Employee {
    id: number;
    name: string;
    value: string;
    label: string;
    email: string;
    phone: string;
    role: string;
    roleValue: string;
    joinDate: string;
    department: string;
    departmentValue: string;
    avatarUrl: string;
}

interface Department {
    value: string;
    label: string;
}

interface Role {
    value: string;
    label: string;
}

const employees: Employee[] = [
    {
        id: 1,
        name: "John Doe",
        value: "john_doe",
        label: "John Doe",
        email: "john.doe@example.com",
        phone: "123-456-7890",
        role: "Manager",
        roleValue: "manager",
        joinDate: "2020-01-15",
        department: "Marketing",
        departmentValue: "marketing",
        avatarUrl: "https://picsum.photos/1920/1080",
    },
    {
        id: 2,
        name: "Jane Smith",
        value: "jane_smith",
        label: "Jane Smith",
        email: "jane.smith@example.com",
        phone: "234-567-8901",
        role: "Developer",
        roleValue: "developer",
        joinDate: "2019-06-10",
        department: "Engineering",
        departmentValue: "engineering",
        avatarUrl: "https://picsum.photos/1920/1080",
    },
    {
        id: 3,
        name: "Emily Johnson",
        value: "emily_johnson",
        label: "Emily Johnson",
        email: "emily.johnson@example.com",
        phone: "345-678-9012",
        role: "Designer",
        roleValue: "designer",
        joinDate: "2021-03-20",
        department: "Design",
        departmentValue: "design",
        avatarUrl: "https://picsum.photos/1920/1080",
    },
    {
        id: 4,
        name: "Michael Brown",
        value: "michael_brown",
        label: "Michael Brown",
        email: "michael.brown@example.com",
        phone: "456-789-0123",
        role: "HR Manager",
        roleValue: "hr_manager",
        joinDate: "2018-09-05",
        department: "Sales",
        departmentValue: "sales",
        avatarUrl: "https://picsum.photos/1920/1080",
    },
    {
        id: 5,
        name: "Sarah Wilson",
        value: "sarah_wilson",
        label: "Sarah Wilson",
        email: "sarah.wilson@example.com",
        phone: "567-890-1234",
        role: "Recourcer",
        roleValue: "recourcer",
        joinDate: "2019-11-22",
        department: "Human Resources",
        departmentValue: "human_resources",
        avatarUrl: "https://picsum.photos/1920/1080",
    },
    {
        id: 6,
        name: "David Lee",
        value: "david_lee",
        label: "David Lee",
        email: "david.lee@example.com",
        phone: "678-901-2345",
        role: "Product Manager",
        roleValue: "product_manager",
        joinDate: "2020-02-19",
        department: "Product",
        departmentValue: "product",
        avatarUrl: "https://picsum.photos/1920/1080",
    },
    {
        id: 7,
        name: "Linda Garcia",
        value: "linda_garcia",
        label: "Linda Garcia",
        email: "linda.garcia@example.com",
        phone: "789-012-3456",
        role: "Quality Analyst",
        roleValue: "quality_analyst",
        joinDate: "2021-07-30",
        department: "Quality Assurance",
        departmentValue: "quality_assurance",
        avatarUrl: "https://picsum.photos/1920/1080",
    },
    {
        id: 8,
        name: "Kevin Martinez",
        value: "kevin_martinez",
        label: "Kevin Martinez",
        email: "kevin.martinez@example.com",
        phone: "890-123-4567",
        role: "Network Administrator",
        roleValue: "network_administrator",
        joinDate: "2018-12-14",
        department: "IT",
        departmentValue: "it",
        avatarUrl: "https://picsum.photos/1920/1080",
    },
    {
        id: 9,
        name: "Elizabeth Gonzalez",
        value: "elizabeth_gonzalez",
        label: "Elizabeth Gonzalez",
        email: "elizabeth.gonzalez@example.com",
        phone: "901-234-5678",
        role: "Accountant",
        roleValue: "accountant",
        joinDate: "2020-05-05",
        department: "Finance",
        departmentValue: "finance",
        avatarUrl: "https://picsum.photos/1920/1080",
    },
    {
        id: 10,
        name: "Daniel Harris",
        value: "daniel_harris",
        label: "Daniel Harris",
        email: "daniel.harris@example.com",
        phone: "012-345-6789",
        role: "Support Specialist",
        roleValue: "support_specialist",
        joinDate: "2021-09-20",
        department: "Customer Service",
        departmentValue: "customer_service",
        avatarUrl: "https://picsum.photos/1920/1080",
    }
];

const createDepartmentsRolesArrays = (employees: Employee[]): [Department[], Role[]] => {
    const departments: Department[] = [];
    const roles: Role[] = [];

    employees.forEach(emp => {
        if (!departments.some(d => d.value === emp.departmentValue)) {
            departments.push({ value: emp.departmentValue, label: emp.department });
        }

        const roleValue = emp.role.replace(/\s+/g, '_').toLowerCase();
        if (!roles.some(r => r.value === roleValue)) {
            roles.push({ value: roleValue, label: emp.role });
        }
    });

    return [departments, roles];
};

export default function Employees() {
    const [open, setOpen] = useState<boolean>(false);
    const [value, setValue] = useState<string>("");

    const [searchQuery, setSearchQuery] = useState<string>("");

    const [selectedEmployees, setSelectedEmployees] = useState<Employee[] | null>(employees);

    const [departments, roles] = createDepartmentsRolesArrays(employees);
    const [selectedType, setSelectedType] = useState<string>("");

    const handleSearchChange = (newValue: string): void => {
        setSearchQuery(newValue || '');
    };

    const handleReset = (): void => {
        setSelectedEmployees(employees);
        setValue("");
    }

    const handleSelectEmployee = (currentValue: string): void => {
        if (currentValue) {
            const employee = employees.find(e => e.value === currentValue);
            setSelectedEmployees(employee ? [employee] : []);
        } else {
            setSelectedEmployees(employees);
        }

        setValue(currentValue === value ? "" : currentValue);
        setOpen(false);
        setSelectedType("employee");
    };

    const handleSelectDepOrRoles = (currentValue: string, type: string): void => {
        if (currentValue) {
            const filteredDepartments = employees.filter(e => e.departmentValue === currentValue);
            const filteredRoles = employees.filter(e => e.roleValue === currentValue);

            setSelectedEmployees([...filteredDepartments, ...filteredRoles])
        } else {
            setSelectedEmployees(employees);
        }

        setValue(currentValue === value ? "" : currentValue);
        setOpen(false);
        setSelectedType(type);
    }

    const filteredEmployees = employees.filter((employee) =>
        employee.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const filteredDepartmentsAndRoles = [
        ...departments.map((d) => ({ ...d, type: 'department' })),
        ...roles.map((r) => ({ ...r, type: 'role' }))
    ].filter((item) => item.label.toLowerCase().includes(searchQuery.toLowerCase()));


    return (
        <>
            <div className="space-y-6 pb-4 block">
                <Heading heading={"Employees"} subHeading={"Management and analysis of employee information."} />
                <Separator />
            </div>
            <div className="w-full flex flex-row justify-start items-center gap-y-2 sm:pr-4">
                <div className="w-full flex flex-col sm:flex-row justify-center items-start sm:justify-start sm:items-center gap-2">
                    <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                            <Button
                                variant="outline"
                                role="combobox"
                                aria-expanded={open}
                                className="max-w-[300px] w-full flex justify-start items-center gap-x-2"
                            >
                                <Search className="stroke-zinc-500 h-4 w-4" />
                                {value ? (
                                    selectedType === 'employee'
                                        ? selectedEmployees?.find((item) => item.value === value)?.label
                                        : selectedType === 'department'
                                            ? departments.find((item) => item.value === value)?.label
                                            : roles.find((item) => item.value === value)?.label
                                ) : (
                                    <span className="text-zinc-500">Search...</span>
                                )}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="p-0">
                            <Command
                                className="rounded-lg border shadow-md"
                            >
                                <CommandInput
                                    placeholder="Search an employee or department..."
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
                                                    onSelect={(currentValue) => handleSelectEmployee(currentValue)}
                                                >
                                                    {employee.name}
                                                </CommandItem>
                                            ))}
                                        </CommandGroup>
                                    )}

                                    <CommandSeparator />

                                    {filteredDepartmentsAndRoles.length > 0 && (
                                        <CommandGroup heading="Departments & Roles">
                                            {filteredDepartmentsAndRoles.slice(0, 3).map((items) => (
                                                <CommandItem
                                                    key={items.value}
                                                    value={items.value}
                                                    className="cursor-pointer flex justify-between items-center w-full"
                                                    onSelect={() => handleSelectDepOrRoles(items.value, items.type)}
                                                >
                                                    {items.label}
                                                    <Badge variant="outline" className="font-medium">{items.type}</Badge>
                                                </CommandItem>
                                            ))}
                                        </CommandGroup>
                                    )}
                                </CommandList>
                            </Command>
                        </PopoverContent>
                    </Popover>
                    <div className="w-full flex justify-start sm:justify-end items-center gap-2">
                        <Button size="icon" className="bg-indigo-400 hover:bg-indigo-500">
                            <Plus className="stroke-zinc-50" />
                        </Button>
                        <Button
                            size="icon"
                            variant="outline"
                            className="hover:bg-gray-200"
                            onClick={handleReset}
                        >
                            <Refresh className="stroke-zinc-800 w-4 h-4" />
                        </Button>
                    </div>
                </div>
            </div >
            <div className="w-full h-full py-6">
                <h1 className="text-xl font-medium">
                    <span className="text-indigo-600">
                        {selectedEmployees?.length}
                    </span> Employees
                </h1>
                <div className="hidden md:block border-[1px] border-indigo-200 rounded-md my-4">
                    <div className="w-full flex justify-between items-center px-8 py-2 text-sm capitalize text-zinc-500">
                        <div className="w-1/4 xl:w-1/5 text-start">name</div>
                        <div className="w-1/4 text-start">email</div>
                        <div className="hidden lg:block w-1/5 xl:w-1/6 text-start">phone</div>
                        <div className="w-1/5 xl:w-1/6 text-start">role</div>
                        <div className="hidden xl:block w-1/6 text-start">join date</div>
                        <div className="w-1/5 xl:w-1/6 text-start">department</div>
                    </div>
                    <Separator className="bg-indigo-200" />
                    {selectedEmployees?.map((employee, index) => (
                        <EmployeeRow key={index} employee={employee} />
                    ))}
                </div>
                <div className="md:hidden block border-[1px] border-indigo-200 rounded-md my-4">
                    {selectedEmployees?.map((employee, index) => (
                        <>
                            d
                        </>
                    ))}
                </div>
            </div>
        </>
    );
}