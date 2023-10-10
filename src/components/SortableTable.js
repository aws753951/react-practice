import Table from "./Table";

const SortableTable = (props) => {
  const { config } = props;

  const updateConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => <th>{column.label} is sortable</th>,
    };
  });
  return <Table {...props} config={updateConfig} />; // 後面的config 覆蓋前面props的config
};

export default SortableTable;
