import { Edit } from "@/components/svgs/Icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FC } from "react";

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
    return (
        <div className="w-full flex justify-between items-center py-4 relative px-8">
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
                <Edit className="stroke-zinc-800 w-5 h-5" />
            </div>
        </div>
    );
};

export default EmployeeRow;