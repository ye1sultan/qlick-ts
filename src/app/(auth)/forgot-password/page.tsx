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
import { MouseEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { AuthHeader } from "../components/Header";

const schema = z.object({
    email: z.string().email("Invalid email format").nonempty("Email is required"),
});

type ForgotFormFields = {
    email: string;
};

export default function ForgotPassword() {
    const { toast } = useToast();
    const router = useRouter();
    const [email, setEmail] = useState<string>("");

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
            <AuthHeader text="Forgot password?" />
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4 w-full"
                >

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field, fieldState }) => (
                            <FormItem className="relative group">
                                <FormLabel className={`absolute top-[50%] bg-white left-4 translate-y-[-50%] text-zinc-500 group-focus-within:top-0 group-focus-within:left-2 group-focus-within:px-2 transition-all ease-in-out duration-300 ${email ? "top-0 left-2 px-2" : ""}`}>Email</FormLabel>
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

                    <Button type="submit" className="w-full bg-indigo-500 hover:bg-indigo-600">Reset Password</Button>
                    <Button type="button" variant="secondary" className="w-full mt-4 " onClick={(e) => handleBackToLogin(e)}>Back to Login</Button>
                </form>
            </Form>
        </>
    );
}