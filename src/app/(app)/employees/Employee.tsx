import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { FC, useState } from 'react';
import { Edit } from './components/EditModal';
import { Employee } from './types/IEmployee';
import { formatDate } from './utils/formatDate';

const EmployeeRow: FC<{ employee: Employee }> = ({ employee }) => {
	const [date, setDate] = useState<Date | null>(
		new Date(employee.joinDate) || null
	);
	const [open, setOpen] = useState<boolean>(false);

	return (
		<div
			data-testid="employee-row"
			className="relative flex w-full items-center justify-between px-8 py-4"
		>
			<div className="xl:w-1/5 font-medium flex w-1/4 items-center justify-start gap-x-2 text-start">
				<Avatar className="h-9 w-9">
					<AvatarImage src={employee.avatarUrl} />
					<AvatarFallback>{`${employee.name.split(' ')[0].charAt(0)} ${employee.name.split(' ')[1].charAt(0)}`}</AvatarFallback>
				</Avatar>
				<span className="truncate">{employee.name}</span>
			</div>
			<div className="w-1/4 truncate text-start text-[15px]">
				{employee.email}
			</div>
			<div className="lg:block xl:w-1/6 hidden w-1/5 truncate text-start text-[15px]">
				{employee.phone}
			</div>
			<div className="xl:w-1/6 w-1/5 truncate text-start text-[15px]">
				{employee.role}
			</div>
			<div className="xl:block hidden w-1/6 truncate text-start text-[15px]">
				{formatDate(employee.joinDate)}
			</div>
			<div className="xl:w-1/6 w-1/5 truncate text-start text-[15px]">
				{employee.department}
			</div>
			<div className="absolute right-4 top-[50%] translate-y-[-50%] cursor-pointer">
				<Edit
					employee={employee}
					open={open}
					setOpen={setOpen}
					date={date || new Date()}
					setDate={setDate}
				/>
			</div>
		</div>
	);
};

export default EmployeeRow;
