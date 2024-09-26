import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Link } from "react-router-dom"
import { LoginForm } from "./_components/LoginForm"


export default function LoginPage() {

    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-red-400 to-gray-900x">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div
                    className="absolute inset-0 bg-gradient-to-r from-red-400 to-gray-200 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                </div>
                <div className="relative px-4x py-10x bg-white shadow-lg sm:rounded-3xl sm:p-20x">
                    <Card className="mx-auto max-w-sm">
                        <CardHeader>
                            <div className="mx-auto">
                                <img src="/itf-logo.png" width={70} />
                            </div>
                            <CardTitle className="text-2xl text-center">Login</CardTitle>
                            <CardDescription>
                                Enter your email below to login to your account
                            </CardDescription>
                        </CardHeader>

                        <CardContent>
                            <LoginForm />
                            <div className="mt-4 text-center text-sm">
                                Employer &amp; don&apos;t have an account?{" "}
                                <Link to="#" className="underline">
                                    Create Account
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
