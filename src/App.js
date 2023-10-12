import React from "react";
import Cards from "./Cards";

const App = () => {
    const title = "123";
    const content = 456;
    return (
        <div>
            <Cards title={title} content={content} />
        </div>
    );
};

export default App;
