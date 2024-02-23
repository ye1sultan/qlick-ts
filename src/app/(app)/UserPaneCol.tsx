import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type User = {
	fullName: string;
	email: string;
	avatarUrl: string;
};

const UserPaneCol = ({ user }: { user: User }) => (
	<div className="w-full">
		<div className="h-16 w-full rounded-md">
			<div className="flex h-full w-full items-center justify-center">
				<Avatar className="h-8 w-8 rounded-lg">
					<AvatarImage src={user.avatarUrl} />
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
			</div>
		</div>
	</div>
);

export default UserPaneCol;
