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
import { SadEmoji } from "@/components/svgs/Icons";
import { MouseEvent } from "react";
import { redirect, useRouter } from 'next/navigation';

type LoginFormFields = {
    email: string;
    password: string;
};

export default function Login() {
    const { toast } = useToast();
    const router = useRouter();

    const form = useForm<LoginFormFields>({
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const forgotHandle = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        console.log("Forgot button pressed!");
        router.push("/forgot-password");
    }

    const onSubmit: SubmitHandler<LoginFormFields> = (values) => {
        console.log(values);

        if (values.email !== 'niyaztaye@gmail.com' || values.password !== '12345678') {
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "Email or password is incorrect.",
            })
        }
    };

    return (
        <>
            <h1 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-normal first:mt-0 self-start mb-8">Welcome back!</h1>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4 w-full"
                >
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="worker123@example.com"
                                        {...field}
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
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input
                                        type="password"
                                        placeholder="********"
                                        {...field}
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
                            className="ml-auto p-0 flex justify-center items-center gap-x-2"
                            onClick={(e) => forgotHandle(e)}
                        >
                            Forgot password?
                            <SadEmoji className="h-5 w-5" />
                        </Button>
                    </div>

                    <Button type="submit" className="w-full bg-indigo-500 hover:bg-indigo-600">Login</Button>
                </form>
            </Form>
        </>
    );
}