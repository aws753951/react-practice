import { useContext } from "react";
import BookContext from "./context/books";

const App = () => {
  const { count, increment } = useContext(BookContext);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>add</button>
    </div>
  );
};

export default App;
