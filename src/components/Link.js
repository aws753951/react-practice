import useNavigate from "../hooks/use-navigate-hook";
const Link = ({ to, children }) => {
    const { currentPath, navigate } = useNavigate();
    const handleClick = (e) => {
        e.preventDefault();
        navigate(to);
    };
    return (
        <a href={currentPath} onClick={handleClick}>
            {children}
        </a>
    );
};

export default Link;
