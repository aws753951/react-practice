import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";
const CarList = () => {
    const dispatch = useDispatch();
    const cars = useSelector((state) => state.cars.data);

    // 搭配 renderCar，每次iterate時投入car
    const handleDeleteCar = (car) => {
        console.log(car.id);
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
