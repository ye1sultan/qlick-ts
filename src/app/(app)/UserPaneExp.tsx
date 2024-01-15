import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

type User = {
    fullName: string;
    email: string;
    avatarUrl: string;
};

const UserPaneExp = ({ user }: { user: User }) => (
    <div className="w-full px-2">
        <div className="bg-indigo-200 w-full h-16 rounded-md flex justify-start items-center">
            <Avatar className="mx-4 rounded-lg h-9 w-9">
                <AvatarImage src={user.avatarUrl} />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col justify-center items-start leading-4 tracking-normal w-full overflow-hidden">
                <h3 className="font-semibold text-[14px] flex justify-between items-center w-full">
                    <span className="truncate">{user.fullName}</span>
                </h3>
                <p className="font-medium text-[12px] text-zinc-500 dark:text-zinc-400">
                    <span className="truncate">{user.email}</span>
                </p>
            </div>
        </div>
    </div>
);

export default UserPaneExp;