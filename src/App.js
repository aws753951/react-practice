import Link from "./components/Link";
import Route from "./components/Route";
import useNavigate from "./hooks/use-navigate-hook";
import TestPage from "./pages/TestPage";

const App = () => {
    const { currentPath } = useNavigate();
    return (
        <div className="flex flex-col items-start">
            App
            <Link to="/test1">test1</Link>
            <Route path="/test1">
                <TestPage />
            </Route>
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
