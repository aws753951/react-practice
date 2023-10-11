import Table from "./Table";
import useSort from "../hooks/use-sort";
import { BiUpArrow, BiDownArrow } from "react-icons/bi";

const SortableTable = (props) => {
  const { config, data } = props;

  const { sortOrder, sortBy, setSortColumn, sortData } = useSort({
    data,
    config,
  });

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
            setSortColumn(column.label);
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
