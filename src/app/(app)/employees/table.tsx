import { Separator } from '@/components/ui/separator';
import EmployeeRow from './employee';
import { Employee } from './types/IEmployee';

export const Table = ({
	selectedEmployees,
}: {
	selectedEmployees: Employee[] | [];
}) => {
	return (
		<div className="h-full w-full py-6">
			<h1 className="flex items-center justify-start gap-x-2 text-xl font-medium">
				<span data-testid="employee-count" className="text-indigo-600">
					{selectedEmployees?.length}
				</span>
				<span data-testid="employee-heading">Employees</span>
			</h1>
			<div className="my-4 hidden rounded-md border-[1px] border-indigo-200 md:block">
				<div className="flex w-full items-center justify-between px-2 py-2 text-sm capitalize text-zinc-500 lg:px-6 xl:px-8">
					<div className="w-1/4">name</div>
					<div className="w-1/5">email</div>
					<div className="w-1/5">phone</div>
					<div className="w-1/5">role</div>
					<div className="w-1/5">department</div>
				</div>
				<Separator className="bg-indigo-200" />
				{selectedEmployees?.map((employee, index) => (
					<EmployeeRow key={index} employee={employee} />
				))}
			</div>
			<div className="my-4 block md:hidden">
				{selectedEmployees?.map((employee, index) => (
					<div key={index} className="space-y-3">
						<EmployeeRow employee={employee} />
					</div>
				))}
			</div>
		</div>
	);
};
