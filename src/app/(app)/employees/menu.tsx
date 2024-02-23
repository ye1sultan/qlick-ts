import { Plus, Refresh } from '@/components/svgs/Icons';
import { Button } from '@/components/ui/button';
import { Dispatch, FC, SetStateAction } from 'react';
import { SearchInput } from './search-input';
import { Employee } from './types/IEmployee';

interface MenuProps {
	selectedEmployees: Employee[] | [];
	setSelectedEmployees: Dispatch<SetStateAction<Employee[] | []>>;
	value: string;
	setValue: Dispatch<SetStateAction<string>>;
	employees: Employee[];
	handleReset: () => void;
}

export const Menu: FC<MenuProps> = ({
	selectedEmployees,
	setSelectedEmployees,
	value,
	setValue,
	employees,
	handleReset,
}) => {
	return (
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
					<Button
						size="icon"
						variant="outline"
						className="hover:bg-gray-200"
						onClick={handleReset}
					>
						<Refresh className="h-4 w-4 stroke-zinc-800" />
					</Button>
					<Button size="icon" className="bg-indigo-400 hover:bg-indigo-500">
						<Plus className="stroke-zinc-50" />
					</Button>
				</div>
			</div>
		</div>
	);
};
