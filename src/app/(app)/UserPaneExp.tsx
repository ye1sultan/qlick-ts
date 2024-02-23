import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type User = {
	fullName: string;
	email: string;
	avatarUrl: string;
};

const UserPaneExp = ({ user }: { user: User }) => (
	<div className="w-full px-2">
		<div className="flex h-16 w-full items-center justify-start rounded-md bg-indigo-200">
			<Avatar className="mx-4 h-9 w-9 rounded-lg">
				<AvatarImage src={user.avatarUrl} />
				<AvatarFallback>CN</AvatarFallback>
			</Avatar>
			<div className="flex w-full flex-col items-start justify-center overflow-hidden leading-4 tracking-normal">
				<h3 className="flex w-full items-center justify-between text-[14px] font-semibold">
					<span className="truncate">{user.fullName}</span>
				</h3>
				<p className="text-[12px] font-medium text-zinc-500 dark:text-zinc-400">
					<span className="truncate">{user.email}</span>
				</p>
			</div>
		</div>
	</div>
);

export default UserPaneExp;
