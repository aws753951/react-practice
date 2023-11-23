import { useSelector, useDispatch } from "react-redux";
import { reset, addSong } from "./store";

const App = () => {
    const dispatch = useDispatch();

    const songList = useSelector((state) => state.songs);
    const renderSongs = songList.map((song, index) => (
        <div key={index}>{song}</div>
    ));
    const handleAddSong = () => {
        dispatch(addSong("xxx"));
    };

    const handleDismiss = () => {
        dispatch(reset());
    };
    return (
        <div>
            <div>{renderSongs}</div>
            <button onClick={handleAddSong}>add 1 song</button>
            <button onClick={() => handleDismiss()}>dismiss</button>
        </div>
    );
};

export default App;
