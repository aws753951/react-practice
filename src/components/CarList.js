import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";

const CarList = () => {
    const dispath = useDispatch();

    const cars = useSelector((state) => state.cars.data);

    const handleDeleteCar = (car) => {
        dispath(removeCar(car.id));
    };
    const renderCars = cars.map((car) => {
        return (
            <div key={car.id} className="panel">
                <p>
                    {car.name} - ${car.cost}
                </p>
                <button
                    className="button is-danger"
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
        <div className="car-list">
            {renderCars}
            <hr />
        </div>
    );
};

export default CarList;
