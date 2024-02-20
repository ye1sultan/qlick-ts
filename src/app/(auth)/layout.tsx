import { Toaster } from '@/components/ui/toaster';
import { Quicksand } from 'next/font/google';
import Image from 'next/image';

const quick = Quicksand({ subsets: ['latin'], display: 'swap' });

export default function AuthLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	console.log('quick', quick.className);
	return (
		<>
			<Toaster />
			<div className="relative flex h-screen w-full flex-row justify-center">
				<div className="flex w-full items-center justify-center md:w-[60%] lg:w-[40%]">
					<h1
						className={`absolute left-0 top-8 ml-4 text-3xl font-black md:left-8 ${quick.className}`}
					>
						QLICK
					</h1>
					<div className="mx-4 flex w-full max-w-[350px] flex-col items-center justify-center">
						{children}
					</div>
				</div>

				<div className="hidden w-[50%] md:flex lg:w-[60%]">
					<Image
						src="https://picsum.photos/1920/1080"
						className="h-full w-full object-cover object-center"
						alt="Login page"
						width={1920}
						height={1080}
					/>
				</div>
			</div>
		</>
	);
}
