import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

type User = {
    fullName: string;
    email: string;
    avatarUrl: string;
};

const UserPaneCol = ({ user }: { user: User }) => (
    <div className="w-full">
        <div className="w-full h-16 rounded-md">
            <div className="w-full h-full flex justify-center items-center">
                <Avatar className="rounded-lg h-8 w-8">
                    <AvatarImage src={user.avatarUrl} />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
        </div>
    </div>
);

export default UserPaneCol;