import useNavigate from "../hooks/use-navigate-hook";
const Link = ({ to, children }) => {
    const { navigate } = useNavigate();
    const handleClick = (e) => {
        if (e.ctrlKey || e.metaKey) {
            return;
        }
        e.preventDefault();
        navigate(to);
    };
    return (
        <a href={to} onClick={handleClick}>
            {children}
        </a>
    );
};

export default Link;
