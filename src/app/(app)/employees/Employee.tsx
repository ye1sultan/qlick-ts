import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { FC } from 'react';
import { Edit } from './components/EditModal';
import { Employee } from './types/IEmployee';

type Heading = 'Name' | 'Email' | 'Phone' | 'Role' | 'Department';

const headings: Heading[] = ['Name', 'Email', 'Phone', 'Role', 'Department'];

const EmployeeRow: FC<{ employee: Employee }> = ({ employee }) => {
	return (
		<>
			<div className="relative hidden w-full items-center justify-between px-2 py-4 md:flex lg:px-6 xl:px-8">
				<div className="flex w-1/4 items-center justify-start gap-x-2 font-medium">
					<Avatar className="h-9 w-9">
						<AvatarImage src={employee.avatarUrl} />
						<AvatarFallback>{`${employee.name.split(' ')[0].charAt(0)} ${employee.name.split(' ')[1].charAt(0)}`}</AvatarFallback>
					</Avatar>
					<Link href="/" className="truncate text-indigo-950">
						{employee.name}
					</Link>
				</div>

				<div className="w-1/5 truncate">{employee.email}</div>
				<div className="w-1/5 truncate">{employee.phone}</div>
				<div className="w-1/5 truncate">{employee.role}</div>
				<div className="w-1/5 truncate">{employee.department}</div>
				<div className="absolute right-4 top-[50%] translate-y-[-50%] cursor-pointer bg-white">
					<Edit employee={employee} />
				</div>
			</div>
			<div className="flex w-full items-center justify-center rounded border-[1px] border-indigo-100 px-4 py-4 shadow shadow-indigo-100 md:hidden">
				<Accordion className="w-full" type="single" collapsible>
					<AccordionItem value="item-1">
						<AccordionTrigger className="flex w-full items-center justify-between text-base font-medium">
							<div className="flex flex-1 items-center justify-start gap-x-2">
								<Avatar className="h-9 w-9">
									<AvatarImage src={employee.avatarUrl} />
									<AvatarFallback>{`${employee.name.split(' ')[0].charAt(0)} ${employee.name.split(' ')[1].charAt(0)}`}</AvatarFallback>
								</Avatar>
								<span className="">{employee.name}</span>
							</div>
							<Badge className="mr-2 text-sm" variant="secondary">
								{employee.role}
							</Badge>
						</AccordionTrigger>
						<AccordionContent className="w-full px-3 text-base">
							{headings.map((heading, index) => (
								<div
									key={index}
									className="flex items-center justify-between border-t border-indigo-100 px-1 py-3"
								>
									<div>{heading}</div>
									<div>{employee[heading.toLowerCase() as keyof Employee]}</div>
								</div>
							))}
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
		</>
	);
};

export default EmployeeRow;
