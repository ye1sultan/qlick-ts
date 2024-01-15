import { Toaster } from "@/components/ui/toaster";
import { Toast } from "@radix-ui/react-toast";
import { Quicksand } from "next/font/google";

const quick = Quicksand({ subsets: ['latin'] });

export default function AuthLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<>
			<Toaster />
			<div className="w-full h-screen flex flex-row justify-center relative">
				<div className="w-full md:w-[60%] lg:w-[40%] flex justify-center items-center">
					<h1 className={`absolute top-8 left-0 md:left-8 ml-4 text-3xl font-black ${quick.className} ${quick.style.fontWeight}`}>QLICK</h1>
					<div className="max-w-[350px] w-full mx-4 flex flex-col justify-center items-center">
						{children}
					</div>
				</div>

				<div className="w-[50%] lg:w-[60%] hidden md:flex">
					<img src="https://picsum.photos/1920/1080" className="h-full w-full object-cover object-center" alt="Login page" />
				</div>
			</div>
		</>
	)
}