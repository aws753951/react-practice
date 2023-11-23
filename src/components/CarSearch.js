import { useSelector, useDispatch } from "react-redux";
import { changeSearchTerm } from "../store";
const CarSearch = () => {
    const dispatch = useDispatch();

    const searchTerm = useSelector((state) => {
        return state.cars.searchTerm;
    });

    const handleSearchTermChange = (e) => {
        dispatch(changeSearchTerm(e.target.value));
    };
    return (
        <div>
            <h3>My Cars</h3>
            <div>
                <label>Search</label>
                <div>searchTerm</div>
                <input
                    className="input"
                    value={searchTerm}
                    onChange={handleSearchTermChange}
                />
            </div>
        </div>
    );
};

export default CarSearch;
