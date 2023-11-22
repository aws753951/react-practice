import { useSelector, useDispatch } from "react-redux";
import { addSong } from "./store";

const App = () => {
    const dispatch = useDispatch();

    const songList = useSelector((state) => state.songs);
    const renderSongs = songList.map((song, index) => (
        <div key={index}>{song}</div>
    ));
    const handleAddSong = () => {
        dispatch(addSong("tttt song"));
    };
    return (
        <div>
            <div>{renderSongs}</div>
            <button onClick={handleAddSong}>add 1 song</button>
        </div>
    );
};

export default App;
