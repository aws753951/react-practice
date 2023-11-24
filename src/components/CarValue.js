import { useSelector } from "react-redux";

const CarValue = () => {
    const carsCost = useSelector(({ cars: { searchTerm, data } }) => {
        return data
            .filter((car) =>
                car.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .reduce((acc, cur) => acc + cur.cost, 0);
    });
    return <div>{carsCost}</div>;
};

export default CarValue;
