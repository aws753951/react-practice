import useNavigate from "../hooks/use-navigate-hook";
import classNames from "classnames";
const Link = ({ to, children, className }) => {
    const { currentPath, navigate } = useNavigate();
    const handleClick = (e) => {
        if (e.ctrlKey || e.metaKey) {
            return;
        }
        e.preventDefault();
        navigate(to);
    };
    const classes = classNames(
        "text-blue-500",
        className,
        to === currentPath && "bg-red-200"
    );

    return (
        <a href={to} className={classes} onClick={handleClick}>
            {children}
        </a>
    );
};

export default Link;
