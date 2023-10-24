import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, addUser } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";

const UsersList = () => {
    const dispatch = useDispatch();

    const { isLoading, data, error } = useSelector((state) => state.users);

    useEffect(() => {
        console.log(dispatch(fetchUsers()))
    }, [dispatch]);

    const handleUserAdd = () => {
        dispatch(addUser());
    };

    if (isLoading) {
        return <Skeleton times={6} className={"h-10 w-full"} />;
    }

    if (error) {
        console.log(error);
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
                <Button onClick={handleUserAdd}>+ Add User</Button>
            </div>
            {renderdUsers}
        </div>
    );
};

export default UsersList;
