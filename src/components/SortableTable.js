import Table from "./Table";
import { useState } from "react";
import { BiUpArrow, BiDownArrow } from "react-icons/bi";

// 製作新的config，把其投入Table裡面 => 增添須排序的欄位之符號與事件
const SortableTable = (props) => {
    // 紀錄當前的排序狀況
    const [sortOrder, setSortOrder] = useState(null);
    // 紀錄是誰該使用排序狀況
    const [sortBy, setSortBy] = useState(null);
    const { config, data } = props;

    const handleClick = (label) => {
        if (label !== sortBy) {
            setSortOrder("asc");
        } else if (sortOrder === null) {
            setSortOrder("asc");
        } else if (sortOrder === "asc") {
            setSortOrder("desc");
            // 回到上下的icon
        } else if (sortOrder === "desc") {
            setSortOrder(null);
        }
        setSortBy(label);
    };

    const updatedConfig = config.map((column) => {
        if (!column.sortValue) {
            return column;
        }

        // 透過column.sortValue，排除無須作排序的欄位，所以handleClick不用針對沒排序的欄位作篩選
        return {
            ...column,
            header: () => (
                <th
                    onClick={() => {
                        handleClick(column.label);
                    }}
                    className="cursor-pointer hover:bg-gray-100"
                >
                    <div className="flex items-center">
                        {getIcons(column.label, sortBy, sortOrder)}
                        {column.label}
                    </div>
                </th>
            ),
        };
    });

    // 每一次render都重新刷新，所以都會有空間保留原始的順序
    let sortedData = [...data];
    if (sortBy && sortOrder) {
        const { sortValue } = config.find((column) => column.label === sortBy);
        sortedData.sort((a, b) => {
            const valueA = sortValue(a);
            const valueB = sortValue(b);

            const reversedOrder = sortOrder === "asc" ? 1 : -1;

            if (typeof valueA === "string") {
                return valueA.localeCompare(valueB) * reversedOrder;
            }
            return (valueA - valueB) * reversedOrder;
        });
    }

    return <Table {...props} data={sortedData} config={updatedConfig} />;
};

function getIcons(label, sortBy, sortOrder) {
    // 起始畫面，都有上下符號
    // 點擊其一欄位，其他可排序欄位則有上下符號
    if (label !== sortBy) {
        return (
            <div>
                <BiUpArrow />
                <BiDownArrow />
            </div>
        );
    }

    // 若不是起始畫面，是已經有點過的話 => 判斷sortBy的狀況如何
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
