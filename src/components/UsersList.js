import { fetchUser } from "../store";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const UsersList = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUser());
    }, [dispatch]);
    const { data, isLoading, error } = useSelector((state) => state.users);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error fetching data...</div>;
    }

    return <div>{data.length}</div>;
};

export default UsersList;
