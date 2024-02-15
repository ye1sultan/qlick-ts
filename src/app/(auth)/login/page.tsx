'use client';

import { SubmitHandler, useForm } from 'react-hook-form';

import { SadEmoji } from '@/components/svgs/Icons';
import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { MouseEvent, useState } from 'react';
import { AuthHeader } from '../components/Header';

type LoginFormFields = {
	email: string;
	password: string;
};

export default function Login() {
	const { toast } = useToast();

	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const form = useForm<LoginFormFields>({
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const forgotHandle = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
	};

	const onSubmit: SubmitHandler<LoginFormFields> = (values) => {
		console.log(values);

		if (
			values.email !== 'niyaztaye@gmail.com' ||
			values.password !== '12345678'
		) {
			toast({
				variant: 'destructive',
				title: 'Uh oh! Something went wrong.',
				description: 'Email or password is incorrect.',
			});
		}
	};

	return (
		<>
			<AuthHeader text="Welcome back!" />
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="w-full space-y-4"
				>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem className="group relative">
								<FormLabel
									className={`text-zinc-500 absolute left-4 top-[50%] translate-y-[-50%] bg-white transition-all duration-300 ease-in-out group-focus-within:left-2 group-focus-within:top-0 group-focus-within:px-2 ${email ? 'left-2 top-0 px-2' : ''}`}
								>
									Email
								</FormLabel>
								<FormControl>
									<Input
										data-testid="email-input"
										type="email"
										{...field}
										value={email}
										onChange={(e) => {
											setEmail(e.target.value);
											field.onChange(e);
										}}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem className="group relative">
								<FormLabel
									className={`text-zinc-500 absolute left-4 top-[50%] translate-y-[-50%] bg-white transition-all duration-300 ease-in-out group-focus-within:left-2 group-focus-within:top-0 group-focus-within:px-2 group-focus-within:text-[14px] ${password ? 'left-2 top-0 px-2' : ''}`}
								>
									Password
								</FormLabel>
								<FormControl>
									<Input
										data-testid="password-input"
										type="password"
										{...field}
										value={password}
										onChange={(e) => {
											setPassword(e.target.value);
											field.onChange(e);
										}}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<div className="flex w-full">
						<Button
							variant="link"
							size="default"
							className="ml-auto flex items-center justify-center gap-x-2 p-0 px-2"
							onClick={(e) => forgotHandle(e)}
						>
							Forgot password?
							<SadEmoji className="h-5 w-5" />
						</Button>
					</div>

					<Button
						type="submit"
						className="bg-indigo-500 w-full hover:bg-indigo-600"
					>
						Login
					</Button>
				</form>
			</Form>
		</>
	);
}
