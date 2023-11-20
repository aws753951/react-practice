import Table from "./Table";

// 製作新的config，把其投入Table裡面
const SortableTable = (props) => {
    const { config } = props;
    const updatedConfig = config.map((column) => {
        if (!column.sortValue) {
            return column;
        }

        return {
            ...column,
            header: () => (
                <th className="cursor-pointer hover:bg-gray-100">
                    {column.label}
                </th>
            ),
        };
    });
    return <Table {...props} config={updatedConfig} />;
};

export default SortableTable;
