import { useUser } from "@clerk/nextjs";

export const UserDisplay = () => {
    const { user } = useUser();

    return (
        <div className="p-2 flex flex-col items-center justify-center">
            <img
                src={user?.imageUrl!}
                alt={`Avatar of ${user?.username}`}
                className="rounded-full w-24 h-24 object-cover p-1"
            />
            <h2 className="text-sm">{user?.firstName} {user?.lastName}</h2>
        </div>
    );
};
