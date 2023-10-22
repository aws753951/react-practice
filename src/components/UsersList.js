import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store";
import Skeleton from "./Skeleton";

const UsersList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const { isLoading, data, error } = useSelector((state) => state.users);

  if (isLoading) {
    return <Skeleton times={6} className={"h-10 w-full"} />;
  }

  if (error) {
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

  return <div>{renderdUsers}</div>;
};

export default UsersList;
