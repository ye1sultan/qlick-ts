import { Edit as EditIcon } from '@/components/svgs/Icons';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
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
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import { CalendarIcon } from '@radix-ui/react-icons';
import { useRef } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import type { Employee } from '../types/IEmployee';
import { formatDate } from '../utils/formatDate';

export const Edit = ({
	employee,
	open,
	setOpen,
	date,
	setDate,
}: {
	employee: Employee;
	open: boolean;
	setOpen: (open: boolean) => void;
	date: Date;
	setDate: (date: Date) => void;
}) => {
	const close = useRef<HTMLDivElement>(null);

	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
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

					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="joinDate" className="text-right">
							Join Date
						</Label>

						<Popover open={open}>
							<PopoverTrigger asChild>
								<Button
									onClick={() => setOpen(true)}
									variant="outline"
									className="w-[240px] pl-3 text-left font-normal"
								>
									{date ? (
										formatDate(date.toISOString())
									) : (
										<span>Select a date</span>
									)}
									<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
								</Button>
							</PopoverTrigger>
							<PopoverContent className="w-auto p-0" align="center">
								<Calendar
									mode="single"
									selected={date || undefined}
									onSelect={(newDate) => (
										setDate(newDate || new Date()), setOpen(false)
									)}
									disabled={(date) =>
										date > new Date() || date < new Date('1900-01-01')
									}
									initialFocus
								/>
							</PopoverContent>
						</Popover>
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
