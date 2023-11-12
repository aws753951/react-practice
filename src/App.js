import useBookCoutext from "./hooks/use-books-context";

const App = () => {
  const { count, increment } = useBookCoutext();
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>add</button>
    </div>
  );
};

export default App;
