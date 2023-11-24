import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "./store";
import { useEffect } from "react";

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUser());
    }, [dispatch]);

    const data = useSelector((state) => state.users.data);
    console.log(data);
    return <div>App</div>;
};

export default App;
