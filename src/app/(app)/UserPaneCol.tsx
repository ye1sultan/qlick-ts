import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type User = {
	fullName: string;
	email: string;
	avatarUrl: string;
};

const UserPaneCol = ({ user }: { user: User }) => (
	<div className="w-full">
		<div className="rounded-md h-16 w-full">
			<div className="flex h-full w-full items-center justify-center">
				<Avatar className="rounded-lg h-8 w-8">
					<AvatarImage src={user.avatarUrl} />
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
			</div>
		</div>
	</div>
);

export default UserPaneCol;
