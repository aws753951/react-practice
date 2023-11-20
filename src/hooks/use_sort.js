import { useState } from "react";
const use_sort = ({ data, config }) => {
    // 紀錄當前的排序狀況
    const [sortOrder, setSortOrder] = useState(null);
    // 紀錄是誰該使用排序狀況
    const [sortBy, setSortBy] = useState(null);
    const setSortColumn = (label) => {
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
    return { sortOrder, sortBy, setSortColumn, sortedData };
};

export default use_sort;
