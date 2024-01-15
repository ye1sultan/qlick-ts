"use client";

import { SubmitHandler, useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MouseEvent } from "react";
import { useRouter } from "next/navigation";

const schema = z.object({
    email: z.string().email("Invalid email format").nonempty("Email is required"),
});

type ForgotFormFields = {
    email: string;
};

export default function ForgotPassword() {
    const { toast } = useToast();
    const router = useRouter();

    const form = useForm<ForgotFormFields>({
        resolver: zodResolver(schema),
        defaultValues: {
            email: "",
        },
    });

    const handleBackToLogin = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log("Redirecting to login!");

        router.push("/login");
    };

    const onSubmit: SubmitHandler<ForgotFormFields> = (values) => {
        console.log(values);

        toast({
            variant: "default",
            title: "Check your email!",
            description: "If an account exists with that email, we've sent instructions to reset your password.",
        });
    };

    return (
        <>
            <h1 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-normal first:mt-0 self-start mb-8">Forgot password?</h1>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4 w-full"
                >
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field, fieldState }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="worker123@example.com"
                                        {...field}
                                    />
                                </FormControl>
                                {fieldState.error && (
                                    <FormMessage>{fieldState.error.message}</FormMessage>
                                )}
                            </FormItem>
                        )}
                    />

                    <Button type="submit" className="w-full bg-indigo-500 hover:bg-indigo-600">Reset Password</Button>
                    <Button type="button" variant="secondary" className="w-full mt-4 " onClick={(e) => handleBackToLogin(e)}>Back to Login</Button>
                </form>
            </Form>
        </>
    );
}