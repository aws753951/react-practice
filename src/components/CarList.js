import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";
const CarList = () => {
    const dispatch = useDispatch();
    const cars = useSelector(({ cars: { searchTerm, data } }) => {
        return data.filter(
            (car) => car.name.toLowerCase().includes(searchTerm.toLowerCase()) // includes("") 則都會包含
        );
    });

    // 搭配 renderCar，每次iterate時投入car
    const handleDeleteCar = (car) => {
        dispatch(removeCar(car.id));
    };
    const renderCars = cars.map((car) => {
        return (
            <div className="flex" key={car.id}>
                <p>
                    {car.name} - ${car.cost}
                </p>
                <button
                    onClick={() => {
                        handleDeleteCar(car);
                    }}
                >
                    Delete
                </button>
            </div>
        );
    });

    return (
        <div>
            renderCars
            {renderCars}
            <hr />
        </div>
    );
};

export default CarList;
