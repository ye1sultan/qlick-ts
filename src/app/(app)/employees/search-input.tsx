import { Search, UserNotFound } from '@/components/svgs/Icons';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
} from '@/components/ui/command';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import { Dispatch, FC, SetStateAction, useState } from 'react';
import { Employee } from './types/IEmployee';
import { createDepartmentsRolesArrays } from './utils/createDepartmentsRoles';

type SearchInputProps = {
	employees: Employee[];
	value: string;
	setValue: Dispatch<SetStateAction<string>>;
	selectedEmployees: Employee[] | null;
	setSelectedEmployees: Dispatch<SetStateAction<Employee[] | []>>;
};

export const SearchInput: FC<SearchInputProps> = ({
	employees,
	value,
	setValue,
	selectedEmployees,
	setSelectedEmployees,
}) => {
	const [open, setOpen] = useState<boolean>(false);
	const [searchQuery, setSearchQuery] = useState<string | ''>('');
	const [selectedType, setSelectedType] = useState<string | ''>('');

	const [departments, roles] = createDepartmentsRolesArrays(employees);

	const handleSearchChange = (newValue: string): void => {
		setSearchQuery(newValue || '');
		console.log(newValue);
	};

	const handleSelectEmployee = (currentValue: string): void => {
		if (currentValue) {
			const employee = employees.find((e) => e.value === currentValue);
			setSelectedEmployees(employee ? [employee] : []);
		} else {
			setSelectedEmployees(employees);
		}

		setValue(currentValue === value ? '' : currentValue);
		setOpen(false);
		setSelectedType('employee');
	};

	const handleSelectDepOrRoles = (currentValue: string, type: string): void => {
		if (currentValue) {
			const filteredDepartments = employees.filter(
				(e) => e.departmentValue === currentValue
			);
			const filteredRoles = employees.filter(
				(e) => e.roleValue === currentValue
			);

			setSelectedEmployees([...filteredDepartments, ...filteredRoles]);
		} else {
			setSelectedEmployees(employees);
		}

		setValue(currentValue === value ? '' : currentValue);
		setOpen(false);
		setSelectedType(type);
	};

	const filteredEmployees = employees.filter((employee) =>
		employee.name.toLowerCase().includes(searchQuery.toLowerCase())
	);

	const filteredDepartmentsAndRoles = [
		...departments.map((d) => ({ ...d, type: 'department' })),
		...roles.map((r) => ({ ...r, type: 'role' })),
	].filter((item) =>
		item.label.toLowerCase().includes(searchQuery.toLowerCase())
	);

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					role="combobox"
					aria-expanded={open}
					className="flex w-full max-w-[300px] items-center justify-start gap-x-2"
				>
					<Search className="h-4 w-4 stroke-zinc-500" />
					{value ? (
						selectedType === 'employee' ? (
							selectedEmployees?.find((item) => item.value === value)?.label
						) : selectedType === 'department' ? (
							departments.find((item) => item.value === value)?.label
						) : (
							roles.find((item) => item.value === value)?.label
						)
					) : (
						<span className="text-zinc-500">Search...</span>
					)}
				</Button>
			</PopoverTrigger>
			<PopoverContent className="p-0">
				<Command className="rounded-lg border shadow-md">
					<CommandInput
						placeholder="Search an employee or department..."
						value={searchQuery}
						onValueChange={handleSearchChange}
						data-testid="search-input"
					/>
					<CommandList>
						<CommandEmpty>
							<div className="flex items-center justify-center gap-x-2">
								<UserNotFound className="h-5 w-5 stroke-zinc-600" />
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
										onSelect={(currentValue) =>
											handleSelectEmployee(currentValue)
										}
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
										className="flex w-full cursor-pointer items-center justify-between"
										onSelect={() =>
											handleSelectDepOrRoles(items.value, items.type)
										}
									>
										{items.label}
										<Badge variant="outline" className="font-medium">
											{items.type}
										</Badge>
									</CommandItem>
								))}
							</CommandGroup>
						)}
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	);
};
