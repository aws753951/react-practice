import Table from "./Table";
import use_sort from "../hooks/use_sort";
import { BiUpArrow, BiDownArrow } from "react-icons/bi";

// 製作新的config，把其投入Table裡面 => 增添須排序的欄位之符號與事件
const SortableTable = (props) => {
    const { data, config } = props;
    const { sortOrder, sortBy, setSortColumn, sortedData } = use_sort({
        data,
        config,
    });
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
                        setSortColumn(column.label);
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
