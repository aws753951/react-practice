import { createContext, useState, useEffect } from "react";

const NavigationContext = createContext();

function NavigationProvider({ children }) {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const handler = () => {
            setCurrentPath(window.location.pathname);
        };

        window.addEventListener("popstate", handler); // 上下頁: 變更address

        return () => {
            window.removeEventListener("popstate", handler);
        };
    }, []);

    const navigate = (to) => {
        window.history.pushState({}, "", to); // 點擊: 變更address
        setCurrentPath(to); // 同時更改state
    };

    return (
        <NavigationContext.Provider value={{ currentPath, navigate }}>
            {children}
        </NavigationContext.Provider>
    );
}

export { NavigationProvider };
export default NavigationContext;
