import { useState } from "react";

function useSort({ data, config }) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const setSortColumn = (label) => {
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

  return {
    sortOrder,
    sortBy,
    setSortColumn,
    sortData,
  };
}

export default useSort;
