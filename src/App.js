import { useSelector } from "react-redux";

const App = () => {
    const songList = useSelector((state) => state.songs);
    return <div>{songList}</div>;
};

export default App;
