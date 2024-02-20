'use client';

import { SadEmoji } from '@/components/svgs/Icons';
import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import Link from 'next/link';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AuthHeader } from '../components/heading';
import { Label } from '../components/label';

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
								<Label text="Email" fill={email} />
								<FormControl>
									<Input
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
								<Label text="Password" fill={password} />
								<FormControl>
									<Input
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

					<div className="flex w-full justify-end">
						<Link
							href="/forgot-password"
							className="flex items-center p-0 px-2 text-sm"
						>
							Forgot password?
							<SadEmoji className="ml-1 h-5 w-5" />
						</Link>
					</div>

					<Button
						type="submit"
						className="w-full bg-indigo-500 hover:bg-indigo-600"
					>
						Login
					</Button>
				</form>
			</Form>
		</>
	);
}
