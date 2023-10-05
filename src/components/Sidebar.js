import Link from "./Link";

const Sidebar = () => {
    const links = [
        { label: "Dropdown", path: "/" },
        { label: "Accordion", path: "/accordion" },
        { label: "Buttons", path: "/buttons" },
        { label: "Modal", path: "/modal" },
    ];

    const renderLinks = links.map((link) => {
        return (
            <Link
                className="mb-3"
                activeClassName="font-bold border-l-4 border-blue-500 pl-2 items-start"
                key={link.label}
                to={link.path}
            >
                {link.label}
            </Link>
        );
    });

    return (
        <div className="sticky top-0 overflow-y-auto flex flex-col ">
            {renderLinks}
        </div>
    );
};

export default Sidebar;
