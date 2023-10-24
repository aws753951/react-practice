import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, addUser } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";

const UsersList = () => {
    const dispatch = useDispatch();
    const [isLoadingUsers, setIsLoadingUsers] = useState(false);
    const [loadingUsersError, setLoadingUsersError] = useState(null);
    const [isCreatingUser, setIsCreatingUser] = useState(false);
    const [creatingUserError, setCreatingUserError] = useState(null);

    const { data } = useSelector((state) => state.users);

    useEffect(() => {
        setIsLoadingUsers(true)
        dispatch(fetchUsers())
            .unwrap()
            .catch((err)=>setLoadingUsersError(err))
            .finally(()=>setIsLoadingUsers(false))
    }, [dispatch]);

    const handleUserAdd = () => {
        setIsCreatingUser(true)
        dispatch(addUser())
            .unwrap()
            .catch((err)=>setCreatingUserError(err))
            .finally(()=>setIsCreatingUser(false))
    };

    if (isLoadingUsers) {
        return <Skeleton times={6} className={"h-10 w-full"} />;
    }

    if (loadingUsersError) {
        console.log(loadingUsersError);
        return <div>Error fetching data...</div>;
    }

    const renderdUsers = data.map((user) => {
        return (
            <div key={user.id} className="mb-2 border rounded">
                <div className="flex p-2 justify-between items-center cursor-pointer">
                    {user.name}
                </div>
            </div>
        );
    });

    return (
        <div>
            <div className="flex justify-between items-center">
                <h1 className="m-2 text-xl">Users</h1>
                {isCreatingUser ? "Creating user...": <Button onClick={handleUserAdd}>+ Add User</Button>}
                {creatingUserError && "Error with creating user..."}
            </div>
            {renderdUsers}
        </div>
    );
};

export default UsersList;
