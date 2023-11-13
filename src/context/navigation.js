import { useState, createContext, useEffect } from "react";

const NavigationContext = createContext();
function NavigationProvider({ children }) {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    // 1. 導頁 + 捕捉
    const navigate = (to) => {
        setCurrentPath(to);
        window.history.pushState({}, "", to);
    };

    // 2. 上下頁 + 捕捉
    useEffect(() => {
        const handler = () => {
            setCurrentPath(window.location.pathname);
        };
        window.addEventListener("popstate", handler);
        return () => {
            window.removeEventListener("popstate", handler);
        };
    }, []);

    const valueToShare = { currentPath, navigate }; // 需要可以導頁的function + 紀錄當前頁面
    return (
        <NavigationContext.Provider value={valueToShare}>
            {children}
        </NavigationContext.Provider>
    );
}

export default NavigationContext;
export { NavigationProvider };
