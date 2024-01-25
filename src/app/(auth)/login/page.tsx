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
import { AuthHeader } from "../components/Header";

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
            <AuthHeader text="Welcome back!" />
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4 w-full"
                >
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem className="relative group focus:border-none">
                                <FormLabel className="absolute top-[50%] bg-white left-4 translate-y-[-50%] text-zinc-500 group-focus-within:top-0 group-focus-within:left-2 group-focus-within:px-2 group-focus-within:text-[14px] transition-all ease-in-out duration-300">Email</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem className="relative group">
                                <FormLabel className="absolute top-[50%] bg-white left-4 translate-y-[-50%] text-zinc-500 group-focus-within:top-0 group-focus-within:left-2 group-focus-within:px-2 group-focus-within:text-[14px] transition-all ease-in-out duration-300">Password</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="flex w-full">
                        <Button
                            variant="link"
                            size="default"
                            className="ml-auto p-0 flex justify-center items-center gap-x-2 px-2"
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