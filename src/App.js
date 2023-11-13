import Link from "./components/Link";
import useNavigate from "./hooks/use-navigate-hook";

const App = () => {
    const { currentPath } = useNavigate();
    return (
        <div className="flex flex-col">
            App
            <Link to="/test1">test1</Link>
            <button
                onClick={() => {
                    alert(currentPath);
                }}
            >
                show path
            </button>
        </div>
    );
};

export default App;
