import { Fragment } from "react";

const Table = ({ data, config }) => {
    const renderHeaders = config.map((column) => {
        if (!column.header) {
            return <th key={column.label}>{column.label}</th>;
        }

        return <Fragment key={column.label}>{column.header()}</Fragment>;
    });

    const renderRows = data.map((rowData) => {
        const renderTDs = config.map((column) => {
            return (
                <td key={column.label} className="p-2">
                    {column.render(rowData)}
                </td>
            );
        });

        return (
            <tr className="border-b" key={rowData.name}>
                {renderTDs}
            </tr>
        );
    });
    return (
        <table className="table-auto border-spacing-2">
            <thead>
                <tr className="border-b-2">{renderHeaders}</tr>
            </thead>

            <tbody>{renderRows}</tbody>
        </table>
    );
};

export default Table;
