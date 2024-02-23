'use client';

import { useState } from 'react';
import { Heading } from '../components/Heading';
import { Menu } from './menu';
import { Table } from './table';
import { Employee } from './types/IEmployee';

const employees: Employee[] = [
	{
		id: 1,
		name: 'John Doe',
		value: 'john_doe',
		label: 'John Doe',
		email: '@john.doe',
		phone: '123-456-7890',
		role: 'Manager',
		roleValue: 'manager',
		department: 'Marketing',
		departmentValue: 'marketing',
		avatarUrl: 'https://picsum.photos/1920/1080',
	},
	{
		id: 2,
		name: 'Jane Smith',
		value: 'jane_smith',
		label: 'Jane Smith',
		email: '@jane.smith',
		phone: '234-567-8901',
		role: 'Developer',
		roleValue: 'developer',
		department: 'Engineering',
		departmentValue: 'engineering',
		avatarUrl: 'https://picsum.photos/1920/1080',
	},
	{
		id: 3,
		name: 'Emily Johnson',
		value: 'emily_johnson',
		label: 'Emily Johnson',
		email: '@emily.johnson',
		phone: '345-678-9012',
		role: 'Designer',
		roleValue: 'designer',
		department: 'Design',
		departmentValue: 'design',
		avatarUrl: 'https://picsum.photos/1920/1080',
	},
	{
		id: 4,
		name: 'Michael Brown',
		value: 'michael_brown',
		label: 'Michael Brown',
		email: '@michael.brown',
		phone: '456-789-0123',
		role: 'HR Manager',
		roleValue: 'hr_manager',
		department: 'Sales',
		departmentValue: 'sales',
		avatarUrl: 'https://picsum.photos/1920/1080',
	},
	{
		id: 5,
		name: 'Sarah Wilson',
		value: 'sarah_wilson',
		label: 'Sarah Wilson',
		email: '@sarah.wilson',
		phone: '567-890-1234',
		role: 'Recourcer',
		roleValue: 'recourcer',
		department: 'Human Resources',
		departmentValue: 'human_resources',
		avatarUrl: 'https://picsum.photos/1920/1080',
	},
	{
		id: 6,
		name: 'David Lee',
		value: 'david_lee',
		label: 'David Lee',
		email: '@david.lee',
		phone: '678-901-2345',
		role: 'Product Manager',
		roleValue: 'product_manager',
		department: 'Product',
		departmentValue: 'product',
		avatarUrl: 'https://picsum.photos/1920/1080',
	},
	{
		id: 7,
		name: 'Linda Garcia',
		value: 'linda_garcia',
		label: 'Linda Garcia',
		email: '@linda.garcia',
		phone: '789-012-3456',
		role: 'Quality Analyst',
		roleValue: 'quality_analyst',
		department: 'Quality Assurance',
		departmentValue: 'quality_assurance',
		avatarUrl: 'https://picsum.photos/1920/1080',
	},
	{
		id: 8,
		name: 'Kevin Martinez',
		value: 'kevin_martinez',
		label: 'Kevin Martinez',
		email: '@kevin.martinez',
		phone: '890-123-4567',
		role: 'Network Administrator',
		roleValue: 'network_administrator',
		department: 'IT',
		departmentValue: 'it',
		avatarUrl: 'https://picsum.photos/1920/1080',
	},
	{
		id: 9,
		name: 'Elizabeth Gonzalez',
		value: 'elizabeth_gonzalez',
		label: 'Elizabeth Gonzalez',
		email: '@elizabeth.gonzalez',
		phone: '901-234-5678',
		role: 'Accountant',
		roleValue: 'accountant',
		department: 'Finance',
		departmentValue: 'finance',
		avatarUrl: 'https://picsum.photos/1920/1080',
	},
	{
		id: 10,
		name: 'Daniel Harris',
		value: 'daniel_harris',
		label: 'Daniel Harris',
		email: '@daniel.harris',
		phone: '012-345-6789',
		role: 'Support Specialist',
		roleValue: 'support_specialist',
		department: 'Customer Service',
		departmentValue: 'customer_service',
		avatarUrl: 'https://picsum.photos/1920/1080',
	},
];

export default function Employees() {
	const [selectedEmployees, setSelectedEmployees] = useState<Employee[] | []>(
		employees
	);
	const [value, setValue] = useState<string>('');

	const handleReset = (): void => {
		setSelectedEmployees(employees);
		setValue('');
	};

	return (
		<>
			<Heading
				heading={'Employees'}
				subHeading={'Management and analysis of employee information.'}
			/>
			<Menu
				selectedEmployees={selectedEmployees}
				setSelectedEmployees={setSelectedEmployees}
				value={value}
				setValue={setValue}
				employees={employees}
				handleReset={handleReset}
			/>
			<Table selectedEmployees={selectedEmployees} />
		</>
	);
}
