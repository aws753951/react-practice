import Table from "./Table";
import { useState } from "react";
import { BiUpArrow, BiDownArrow } from "react-icons/bi";

const SortableTable = (props) => {
    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);
    const { config, data } = props;

    const handleClick = (label) => {
        // 點擊時變更state: sortOrder

        if (label !== sortBy) {
            setSortOrder("asc");
        } else if (sortOrder === null) {
            setSortOrder("asc");
        } else if (sortOrder === "asc") {
            setSortOrder("desc");
        } else if (sortOrder === "desc") {
            setSortOrder(null);
        }
        setSortBy(label);
    };

    const updateConfig = config.map((column) => {
        if (!column.sortValue) {
            return column;
        }

        return {
            ...column,
            header: () => (
                <th
                    className="cursor-pointer hover:bg-gray-100"
                    onClick={() => {
                        handleClick(column.label);
                    }}
                >
                    <div className="flex items-center">
                        {getIcons(column.label, sortBy, sortOrder)}
                        {column.label}
                    </div>
                </th>
            ),
        };
    });

    let sortData = data; // default : 原始array
    if (sortBy && sortOrder) {
        // find sortValue function to use
        const { sortValue } = config.find((column) => column.label === sortBy); // 僅回傳符合的第一個 element
        sortData = [...data].sort((a, b) => {
            const valueA = sortValue(a);
            const valueB = sortValue(b);

            const reversedOrder = sortOrder === "asc" ? 1 : -1;
            if (typeof valueA === "string") {
                return valueA.localeCompare(valueB) * reversedOrder;
            }
            return (valueA - valueB) * reversedOrder;
        });
    }

    return <Table {...props} data={sortData} config={updateConfig} />; //data覆蓋props當中的data
};

// label跟sortBy是否相同，不同則呈現上下符號
function getIcons(label, sortBy, sortOrder) {
    if (label !== sortBy) {
        return (
            <div>
                <BiUpArrow />
                <BiDownArrow />
            </div>
        );
    }

    if (sortOrder === null) {
        return (
            <div>
                <BiUpArrow />
                <BiDownArrow />
            </div>
        );
    } else if (sortOrder === "asc") {
        return (
            <div>
                <BiUpArrow />
            </div>
        );
    } else if (sortOrder === "desc") {
        return (
            <div>
                <BiDownArrow />
            </div>
        );
    }
}

export default SortableTable;
