import useNavigate from "../hooks/use-navigate-hook";
const Route = ({ path, children }) => {
    const { currentPath } = useNavigate();
    if (currentPath === path) {
        return children;
    } else {
        return null;
    }
};

export default Route;
