import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";

const CarList = () => {
    const dispath = useDispatch();

    // 取得form的name，為onChange，所以取得其name不是在submit後取得的
    const { name, cars } = useSelector(
        ({ form: { name }, cars: { searchTerm, data } }) => {
            const filterCars = data.filter((car) => {
                return car.name
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase());
            });

            return {
                cars: filterCars,
                name,
            };
        }
    );

    const handleDeleteCar = (car) => {
        dispath(removeCar(car.id));
    };
    const renderCars = cars.map((car) => {
        const bold =
            name && car.name.toLowerCase().includes(name.toLowerCase());

        return (
            <div key={car.id} className={`panel ${bold && "bold"}`}>
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
