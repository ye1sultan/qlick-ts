'use client';

import { SubmitHandler, useForm } from 'react-hook-form';

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
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { MouseEvent, useState } from 'react';
import { z } from 'zod';
import { AuthHeader } from '../components/Header';

const schema = z.object({
	email: z.string().email('Invalid email format').nonempty('Email is required'),
});

type ForgotFormFields = {
	email: string;
};

export default function ForgotPassword() {
	const { toast } = useToast();
	const router = useRouter();
	const [email, setEmail] = useState<string>('');

	const form = useForm<ForgotFormFields>({
		resolver: zodResolver(schema),
		defaultValues: {
			email: '',
		},
	});

	const handleBackToLogin = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		console.log('Redirecting to login!');

		router.push('/login');
	};

	const onSubmit: SubmitHandler<ForgotFormFields> = (values) => {
		console.log(values);

		toast({
			variant: 'default',
			title: 'Check your email!',
			description:
				"If an account exists with that email, we've sent instructions to reset your password.",
		});
	};

	return (
		<>
			<AuthHeader text="Forgot password?" />
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="w-full space-y-4"
				>
					<FormField
						control={form.control}
						name="email"
						render={({ field, fieldState }) => (
							<FormItem className="group relative">
								<FormLabel
									className={`text-zinc-500 absolute left-4 top-[50%] translate-y-[-50%] bg-white transition-all duration-300 ease-in-out group-focus-within:left-2 group-focus-within:top-0 group-focus-within:px-2 ${email ? 'left-2 top-0 px-2' : ''}`}
								>
									Email
								</FormLabel>
								<FormControl>
									<Input
										data-testid="email"
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

					<Button
						type="submit"
						className="bg-indigo-500 w-full hover:bg-indigo-600"
					>
						Reset Password
					</Button>
					<Button
						type="button"
						variant="secondary"
						className="mt-4 w-full "
						onClick={(e) => handleBackToLogin(e)}
					>
						Back to Login
					</Button>
				</form>
			</Form>
		</>
	);
}
