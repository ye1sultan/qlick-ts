import { Edit as EditIcon } from '@/components/svgs/Icons';
import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRef } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import type { Employee } from '../types/IEmployee';

export const Edit = ({
	employee,
}: {
	employee: Employee;
}) => {
	const close = useRef<HTMLDivElement>(null);

	const {
		register
	} = useForm<Employee>({ defaultValues: employee });

	const onSubmit: SubmitHandler<Employee> = (data) => {
		console.log('Submitted Data:', data);

		close.current?.click();
	};

	return (
		<Dialog>
			<DialogTrigger asChild>
				<div ref={close}>
					<EditIcon className="h-5 w-5 stroke-zinc-500 hover:stroke-zinc-600" />
				</div>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Edit profile</DialogTitle>
					<DialogDescription>
						Make changes to your profile here. Click save when you&apos;re done.
					</DialogDescription>
				</DialogHeader>
				<div className="grid gap-4 py-4">
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="name" className="text-right">
							Name
						</Label>
						<Input
							id="name"
							defaultValue={employee.name}
							{...register('name', { required: 'Name is required' })}
							className="col-span-3"
							type="text"
						/>
					</div>

					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="email" className="text-right">
							Email
						</Label>
						<Input
							id="email"
							defaultValue={employee.email}
							{...register('email', { required: 'email is required' })}
							className="col-span-3"
							type="email"
						/>
					</div>

					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="phone" className="text-right">
							Phone
						</Label>
						<Input
							id="phone"
							defaultValue={employee.phone}
							className="col-span-3"
							type="tel"
						/>
					</div>

					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="role" className="text-right">
							Role
						</Label>
						<Input
							id="role"
							defaultValue={employee.role}
							className="col-span-3"
							type="tex"
						/>
					</div>

					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="department" className="text-right">
							Department
						</Label>
						<Input
							id="department"
							defaultValue={employee.department}
							className="col-span-3"
							type="tex"
						/>
					</div>
				</div>
				<DialogFooter>
					<Button onClick={() => onSubmit} type="submit">
						Save changes
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};
