'use client';

import { Plus, Refresh } from '@/components/svgs/Icons';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useState } from 'react';
import { Heading } from '../components/Heading';
import EmployeeRow from './Employee';
import { SearchInput } from './search-input';

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

const employees: Employee[] = [
	{
		id: 1,
		name: 'John Doe',
		value: 'john_doe',
		label: 'John Doe',
		email: 'john.doe@example.com',
		phone: '123-456-7890',
		role: 'Manager',
		roleValue: 'manager',
		joinDate: '2020-01-15',
		department: 'Marketing',
		departmentValue: 'marketing',
		avatarUrl: 'https://picsum.photos/1920/1080',
	},
	{
		id: 2,
		name: 'Jane Smith',
		value: 'jane_smith',
		label: 'Jane Smith',
		email: 'jane.smith@example.com',
		phone: '234-567-8901',
		role: 'Developer',
		roleValue: 'developer',
		joinDate: '2019-06-10',
		department: 'Engineering',
		departmentValue: 'engineering',
		avatarUrl: 'https://picsum.photos/1920/1080',
	},
	{
		id: 3,
		name: 'Emily Johnson',
		value: 'emily_johnson',
		label: 'Emily Johnson',
		email: 'emily.johnson@example.com',
		phone: '345-678-9012',
		role: 'Designer',
		roleValue: 'designer',
		joinDate: '2021-03-20',
		department: 'Design',
		departmentValue: 'design',
		avatarUrl: 'https://picsum.photos/1920/1080',
	},
	{
		id: 4,
		name: 'Michael Brown',
		value: 'michael_brown',
		label: 'Michael Brown',
		email: 'michael.brown@example.com',
		phone: '456-789-0123',
		role: 'HR Manager',
		roleValue: 'hr_manager',
		joinDate: '2018-09-05',
		department: 'Sales',
		departmentValue: 'sales',
		avatarUrl: 'https://picsum.photos/1920/1080',
	},
	{
		id: 5,
		name: 'Sarah Wilson',
		value: 'sarah_wilson',
		label: 'Sarah Wilson',
		email: 'sarah.wilson@example.com',
		phone: '567-890-1234',
		role: 'Recourcer',
		roleValue: 'recourcer',
		joinDate: '2019-11-22',
		department: 'Human Resources',
		departmentValue: 'human_resources',
		avatarUrl: 'https://picsum.photos/1920/1080',
	},
	{
		id: 6,
		name: 'David Lee',
		value: 'david_lee',
		label: 'David Lee',
		email: 'david.lee@example.com',
		phone: '678-901-2345',
		role: 'Product Manager',
		roleValue: 'product_manager',
		joinDate: '2020-02-19',
		department: 'Product',
		departmentValue: 'product',
		avatarUrl: 'https://picsum.photos/1920/1080',
	},
	{
		id: 7,
		name: 'Linda Garcia',
		value: 'linda_garcia',
		label: 'Linda Garcia',
		email: 'linda.garcia@example.com',
		phone: '789-012-3456',
		role: 'Quality Analyst',
		roleValue: 'quality_analyst',
		joinDate: '2021-07-30',
		department: 'Quality Assurance',
		departmentValue: 'quality_assurance',
		avatarUrl: 'https://picsum.photos/1920/1080',
	},
	{
		id: 8,
		name: 'Kevin Martinez',
		value: 'kevin_martinez',
		label: 'Kevin Martinez',
		email: 'kevin.martinez@example.com',
		phone: '890-123-4567',
		role: 'Network Administrator',
		roleValue: 'network_administrator',
		joinDate: '2018-12-14',
		department: 'IT',
		departmentValue: 'it',
		avatarUrl: 'https://picsum.photos/1920/1080',
	},
	{
		id: 9,
		name: 'Elizabeth Gonzalez',
		value: 'elizabeth_gonzalez',
		label: 'Elizabeth Gonzalez',
		email: 'elizabeth.gonzalez@example.com',
		phone: '901-234-5678',
		role: 'Accountant',
		roleValue: 'accountant',
		joinDate: '2020-05-05',
		department: 'Finance',
		departmentValue: 'finance',
		avatarUrl: 'https://picsum.photos/1920/1080',
	},
	{
		id: 10,
		name: 'Daniel Harris',
		value: 'daniel_harris',
		label: 'Daniel Harris',
		email: 'daniel.harris@example.com',
		phone: '012-345-6789',
		role: 'Support Specialist',
		roleValue: 'support_specialist',
		joinDate: '2021-09-20',
		department: 'Customer Service',
		departmentValue: 'customer_service',
		avatarUrl: 'https://picsum.photos/1920/1080',
	},
];

export default function Employees() {
	const [selectedEmployees, setSelectedEmployees] = useState<Employee[] | null>(
		employees
	);
	const [value, setValue] = useState<string>('');

	const handleReset = (): void => {
		setSelectedEmployees(employees);
		setValue('');
	};

	return (
		<>
			<div className="block space-y-6 pb-4">
				<Heading
					heading={'Employees'}
					subHeading={'Management and analysis of employee information.'}
				/>
				<Separator />
			</div>
			<div className="flex w-full flex-row items-center justify-start gap-y-2 sm:pr-4">
				<div className="flex w-full flex-col items-start justify-center gap-2 sm:flex-row sm:items-center sm:justify-start">
					<SearchInput
						employees={employees}
						value={value}
						setValue={setValue}
						selectedEmployees={selectedEmployees}
						setSelectedEmployees={setSelectedEmployees}
					/>
					<div className="flex w-full items-center justify-start gap-2 sm:justify-end">
						<Button size="icon" className="bg-indigo-400 hover:bg-indigo-500">
							<Plus className="stroke-zinc-50" />
						</Button>
						<Button
							size="icon"
							variant="outline"
							className="hover:bg-gray-200"
							onClick={handleReset}
						>
							<Refresh className="h-4 w-4 stroke-zinc-800" />
						</Button>
					</div>
				</div>
			</div>
			<div className="h-full w-full py-6">
				<h1 className="flex items-center justify-start gap-x-2 text-xl font-medium">
					<span data-testid="employee-count" className="text-indigo-600">
						{selectedEmployees?.length}
					</span>
					<span data-testid="employee-heading">Employees</span>
				</h1>
				<div className="my-4 hidden rounded-md border-[1px] border-indigo-200 md:block">
					<div className="flex w-full items-center justify-between px-8 py-2 text-sm capitalize text-zinc-500">
						<div className="w-1/4 text-start xl:w-1/5">name</div>
						<div className="w-1/4 text-start">email</div>
						<div className="hidden w-1/5 text-start lg:block xl:w-1/6">
							phone
						</div>
						<div className="w-1/5 text-start xl:w-1/6">role</div>
						<div className="hidden w-1/6 text-start xl:block">join date</div>
						<div className="w-1/5 text-start xl:w-1/6">department</div>
					</div>
					<Separator className="bg-indigo-200" />
					{selectedEmployees?.map((employee, index) => (
						<EmployeeRow key={index} employee={employee} />
					))}
				</div>
			</div>
		</>
	);
}
