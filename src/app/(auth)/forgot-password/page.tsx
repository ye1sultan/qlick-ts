'use client';

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
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { AuthHeader } from '../components/heading';
import { Label } from '../components/label';

const schema = z.object({
	email: z.string().email('Invalid email format').min(5),
});

type ForgotFormFields = {
	email: string;
};

export default function ForgotPassword() {
	const { toast } = useToast();

	const [email, setEmail] = useState<string>('');

	const form = useForm<ForgotFormFields>({
		resolver: zodResolver(schema),
		defaultValues: {
			email: '',
		},
	});

	const onSubmit: SubmitHandler<ForgotFormFields> = (values) => {
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
						render={({ field }) => (
							<FormItem className="group relative">
								<Label text="Email" fill={email} />
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
						className="w-full bg-indigo-500 hover:bg-indigo-600"
					>
						Reset Password
					</Button>

					<Button
						type="button"
						variant="secondary"
						className="mt-4 w-full"
						asChild
					>
						<Link className="w-full" href="/login">
							Back to login
						</Link>
					</Button>
				</form>
			</Form>
		</>
	);
}
