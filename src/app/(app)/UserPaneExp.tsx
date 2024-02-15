import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type User = {
	fullName: string;
	email: string;
	avatarUrl: string;
};

const UserPaneExp = ({ user }: { user: User }) => (
	<div className="w-full px-2">
		<div className="rounded-md flex h-16 w-full items-center justify-start bg-indigo-200">
			<Avatar className="rounded-lg mx-4 h-9 w-9">
				<AvatarImage src={user.avatarUrl} />
				<AvatarFallback>CN</AvatarFallback>
			</Avatar>
			<div className="leading-4 flex w-full flex-col items-start justify-center overflow-hidden tracking-normal">
				<h3 className="font-semibold flex w-full items-center justify-between text-[14px]">
					<span className="truncate">{user.fullName}</span>
				</h3>
				<p className="font-medium text-zinc-500 dark:text-zinc-400 text-[12px]">
					<span className="truncate">{user.email}</span>
				</p>
			</div>
		</div>
	</div>
);

export default UserPaneExp;
