import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Link, useNavigate } from "react-router-dom"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import useSWRMutation from 'swr/mutation';
import { userLogin2 } from "@/services/AuthService"
import { Loader } from "lucide-react"

const formSchema = z.object({
    email: z
        .string({
            required_error: 'Email is required',
            invalid_type_error: 'Email must be a string',
        })
        .email('Invalid email address'),
    password: z
        .string({
            required_error: 'Password is required',
        })
        .min(1, { message: 'Password is required' }),
});

export function LoginForm() {
    const navigate = useNavigate();
    const { trigger: loginTrigger, isMutating: isProcessing } = useSWRMutation(
        '/auth/login',
        userLogin2,
    );

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    async function submitForm(data: z.infer<typeof formSchema>) {
        toast.dismiss();
        try {
            const { email, password } = data;
            const response = await loginTrigger({ email, password });

            if (response?.success && response?.statusCode === 200) {
                toast.success(response?.message ?? 'Login successful', {
                    position: 'top-right',
                });
                navigate("/admin");
            } else {
                toast.error(response?.message ?? 'An error occured', {
                    position: 'top-right',
                });
            }
            // eslint-disable-next-line  @typescript-eslint/no-explicit-any
        } catch (error: any) {
            // console.log('Error: ', error);
            let message = 'Something went wrong.';
            if (error?.response?.data?.statusText) {
                message = error.response.data.statusText;
            }
            toast.error(message, {
                position: 'top-right',
            });
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(submitForm)}>
                <div className="grid gap-4">
                    <div className="grid gap-2">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input type="email" placeholder="email@example.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="grid gap-2">
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <div className="flex items-center">
                                        <FormLabel>Password</FormLabel>
                                        <Link to="#" className="ml-auto inline-block text-sm underline">
                                            Forgot your password?
                                        </Link>
                                    </div>
                                    <FormControl>
                                        <Input type="password" placeholder="**********" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <Button type='submit' disabled={isProcessing} className='w-full transition [box-shadow:rgb(0,_0,_0)_-3px_3px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px]'>
                        {isProcessing && <Loader className='mr-2 h-4 animate-spin ' />}
                        {isProcessing ? 'Processing...' : 'Login'}
                    </Button>
                </div>
            </form>
        </Form>
    )
}
